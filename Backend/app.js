const express=require("express");
const globalErrorHandler=require("./Controller/ErrorController");
 const AppError=require("./Utils/AppError");

const authrouter=require("./Routes/authRoute");
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"hello"
    })
})
app.use("/api/auth",authrouter);

app.all('*',(req,res,next)=>{
  next(new AppError("route Does not Exist",400))
})

app.use(globalErrorHandler);
module.exports=app;