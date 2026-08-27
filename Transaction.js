const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  bookId:{type:mongoose.Schema.Types.ObjectId,ref:"Book",required:true},
  memberId:{type:mongoose.Schema.Types.ObjectId,ref:"Member",required:true},
  issueDate:{type:Date,default:Date.now},
  returnDate:{type:Date,default:null},
  status:{type:String,enum:["Issued","Returned"],default:"Issued"}
},{timestamps:true});
module.exports = mongoose.model("Transaction", schema);
