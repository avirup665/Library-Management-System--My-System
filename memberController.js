const Member=require("../models/Member");
const Transaction=require("../models/Transaction");
exports.getAll=async(req,res)=>{try{res.json(await Member.find().sort({createdAt:-1}))}catch(e){res.status(500).json({message:e.message})}};
exports.create=async(req,res)=>{try{
 const {name,email,phone,membershipDate}=req.body;if(!name||!email||!phone)return res.status(400).json({message:"Name, email and phone are required"});
 res.status(201).json(await Member.create({name,email,phone,membershipDate:membershipDate||Date.now()}));
}catch(e){res.status(400).json({message:e.code===11000?"A member with this email already exists":e.message})}};
exports.update=async(req,res)=>{try{
 const m=await Member.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});if(!m)return res.status(404).json({message:"Member not found"});res.json(m);
}catch(e){res.status(400).json({message:e.code===11000?"A member with this email already exists":e.message})}};
exports.remove=async(req,res)=>{try{
 const m=await Member.findById(req.params.id);if(!m)return res.status(404).json({message:"Member not found"});
 if(await Transaction.exists({memberId:m._id,status:"Issued"}))return res.status(400).json({message:"Cannot delete a member who has an issued book"});
 await m.deleteOne();res.json({message:"Member deleted successfully"});
}catch(e){res.status(500).json({message:e.message})}};
