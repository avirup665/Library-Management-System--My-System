const Book=require("../models/Book");
const Transaction=require("../models/Transaction");
exports.getAll=async(req,res)=>{try{res.json(await Book.find().sort({createdAt:-1}))}catch(e){res.status(500).json({message:e.message})}};
exports.create=async(req,res)=>{try{
 const {title,author,category,isbn,quantity}=req.body; const q=Number(quantity);
 if(!title||!author||!Number.isInteger(q)||q<0) return res.status(400).json({message:"Title, author and a non-negative whole-number quantity are required"});
 res.status(201).json(await Book.create({title,author,category,isbn,quantity:q,availableQuantity:q}));
}catch(e){res.status(400).json({message:e.message})}};
exports.update=async(req,res)=>{try{
 const b=await Book.findById(req.params.id); if(!b)return res.status(404).json({message:"Book not found"});
 const issued=b.quantity-b.availableQuantity; const q=req.body.quantity===undefined?b.quantity:Number(req.body.quantity);
 if(!Number.isInteger(q)||q<issued)return res.status(400).json({message:`Quantity must be a whole number and cannot be below ${issued} while copies are issued`});
 ["title","author","category","isbn"].forEach(k=>{if(req.body[k]!==undefined)b[k]=req.body[k]});
 b.quantity=q; b.availableQuantity=q-issued; res.json(await b.save());
}catch(e){res.status(400).json({message:e.message})}};
exports.remove=async(req,res)=>{try{
 const b=await Book.findById(req.params.id); if(!b)return res.status(404).json({message:"Book not found"});
 if(await Transaction.exists({bookId:b._id,status:"Issued"}))return res.status(400).json({message:"Cannot delete a book while a copy is issued"});
 await b.deleteOne(); res.json({message:"Book deleted successfully"});
}catch(e){res.status(500).json({message:e.message})}};
