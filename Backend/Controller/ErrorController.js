module.exports=(err,req,res,next)=>{
   console.log(err);
    res.status(err.statusCode).json({
        status:err.status||500,
        message:err.message
    })
}

  