require("dotenv").config(); const connectDB=require("./config/db"),Book=require("./models/Book"),Member=require("./models/Member"),Transaction=require("./models/Transaction");
(async()=>{try{await connectDB();await Transaction.deleteMany();await Book.deleteMany();await Member.deleteMany();await Book.insertMany([
{title:"Python Programming",author:"John Smith",category:"Programming",isbn:"9780000000001",quantity:5,availableQuantity:5},
{title:"Database Management Systems",author:"R. Kumar",category:"Database",isbn:"9780000000002",quantity:3,availableQuantity:3},
{title:"Web Development Fundamentals",author:"A. Sharma",category:"Web Development",isbn:"9780000000003",quantity:4,availableQuantity:4}]);
await Member.insertMany([{name:"Rahul Sharma",email:"rahul@example.com",phone:"9876543210"},{name:"Priya Singh",email:"priya@example.com",phone:"9123456789"}]);
console.log("Sample data inserted successfully");process.exit(0)}catch(e){console.error(e);process.exit(1)}})();
