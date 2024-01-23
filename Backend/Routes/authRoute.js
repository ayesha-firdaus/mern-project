const {signup,login,validate,protect}=require("../Controller/authController");
const express=require("express");
const router=express.Router();
router.post("/signup",signup);
router.post("/login",login);
router.get("/validate",protect,validate)
module.exports=router