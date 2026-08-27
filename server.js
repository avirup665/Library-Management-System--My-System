require("dotenv").config();
const express=require("express"), cors=require("cors"), connectDB=require("./config/db");
const app=express(); app.use(cors()); app.use(express.json());
app.get("/",(req,res)=>res.json({message:"Library Management System API is running"}));
app.use("/api/books",require("./routes/bookRoutes"));
app.use("/api/members",require("./routes/memberRoutes"));
app.use("/api/transactions",require("./routes/transactionRoutes"));
app.use((req,res)=>res.status(404).json({message:"Route not found"}));
const PORT=process.env.PORT||5000; connectDB().then(()=>app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`)));
