const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name:{type:String,required:true,trim:true},
  email:{type:String,required:true,unique:true,lowercase:true,trim:true,match:/^\S+@\S+\.\S+$/},
  phone:{type:String,required:true,trim:true},
  membershipDate:{type:Date,default:Date.now}
},{timestamps:true});
module.exports = mongoose.model("Member", schema);
