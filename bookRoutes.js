const r=require("express").Router(); const c=require("../controllers/bookController");
r.route("/").get(c.getAll).post(c.create); r.route("/:id").put(c.update).delete(c.remove); module.exports=r;
