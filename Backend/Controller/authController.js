const User=require("../Models/UserModel");
const jwt=require('jsonwebtoken');
const CatchAsync=require("../Utils/CatchAsync")
exports.signup=async(req,res,next)=>{
    const newuser=await User.create({
        name:req.body.name,
        email:req.body.email,
        photo:req.body.photo,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm
     })
    const token=jwt.sign({id:newuser._id},process.env.jwt_secret,{expiresIn:process.env.jwt_expires_in})
    res.status(200).json({
        status:"success",
        message:"user has been sucessfully signed In",
        token,
        newuser
    })
}

