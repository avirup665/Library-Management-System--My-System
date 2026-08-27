const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title:{type:String,required:true,trim:true},
  author:{type:String,required:true,trim:true},
  category:{type:String,default:"General",trim:true},
  isbn:{type:String,default:"",trim:true},
  quantity:{type:Number,required:true,min:0},
  availableQuantity:{type:Number,required:true,min:0}
},{timestamps:true});
module.exports = mongoose.model("Book", schema);
