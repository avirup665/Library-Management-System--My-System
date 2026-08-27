const Transaction=require("../models/Transaction");
const Book=require("../models/Book");
const Member=require("../models/Member");
exports.getAll=async(req,res)=>{try{res.json(await Transaction.find().populate("bookId","title author").populate("memberId","name email").sort({createdAt:-1}))}catch(e){res.status(500).json({message:e.message})}};
exports.issue=async(req,res)=>{const {bookId,memberId,issueDate}=req.body;try{
 if(!bookId||!memberId)return res.status(400).json({message:"Book and member are required"});
 if(!await Member.findById(memberId))return res.status(404).json({message:"Member not found"});
 const b=await Book.findOneAndUpdate({_id:bookId,availableQuantity:{$gt:0}},{$inc:{availableQuantity:-1}},{new:true});
 if(!b)return res.status(400).json({message:"Book is not available"});
 try{const t=await Transaction.create({bookId,memberId,issueDate:issueDate||Date.now()}); await t.populate([{path:"bookId",select:"title author"},{path:"memberId",select:"name email"}]);res.status(201).json(t)}
 catch(err){await Book.findByIdAndUpdate(bookId,{$inc:{availableQuantity:1}});throw err}
}catch(e){res.status(400).json({message:e.message})}};
exports.returnBook=async(req,res)=>{try{
 const t=await Transaction.findOneAndUpdate({_id:req.params.id,status:"Issued"},{status:"Returned",returnDate:new Date()},{new:true});
 if(!t)return res.status(400).json({message:"Transaction not found or book already returned"});
 await Book.findByIdAndUpdate(t.bookId,{$inc:{availableQuantity:1}}); await t.populate([{path:"bookId",select:"title author"},{path:"memberId",select:"name email"}]);res.json(t);
}catch(e){res.status(400).json({message:e.message})}};
