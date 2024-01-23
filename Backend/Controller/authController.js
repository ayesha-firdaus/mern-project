const User=require("../Models/UserModel");
const jwt=require('jsonwebtoken');
const CatchAsync=require("../Utils/CatchAsync")
const {promisify}=require('util');
const AppError=require("../Utils/AppError");
exports.signup=CatchAsync(async(req,res,next)=>{
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
})
exports.login=CatchAsync(async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email||!password)
    {
  return  next(new AppError("email or password is not given",400))
    }
    const user = await User.findOne({ email }).select('+password');
    if(!user||!( await user.validatePassword(password,user.password)))
    {
       return  next(new AppError("Incorrect User and Password",400));
    }
    const token=jwt.sign({id:user._id},process.env.jwt_secret,{expiresIn:process.env.jwt_expires_in});
    res.cookie("access_token",token,{httpOnly:true});
    res.status(200).json({
        status:"sucess",
        message:"user has been sucessfully logged in",
        user,
        token


    })

})
exports.protect=async(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token)
    {
        return next(new AppError("you are not logged in",401));
    }
    const decoded=await promisify (jwt.verify)(token,process.env.jwt_secret);
    console.log(decoded);
    const currentUser=await User.findById(decoded.id);
    if(!currentUser)
    {
        return next(new AppError("the user belonging to this token does no longer exist",401));
    }
    if(currentUser.changedPasswordAfter(decoded.iat))
    {
        return next(new AppError("the password has been changed after the token has been issued,please login again",401));
    }
    req.user=currentUser;
    next();

}

