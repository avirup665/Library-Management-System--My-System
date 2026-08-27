const r=require("express").Router(); const c=require("../controllers/transactionController");
r.get("/",c.getAll); r.post("/issue",c.issue); r.put("/:id/return",c.returnBook); module.exports=r;
