const {mongoose} = require("mongoose");
const bcryptjs=require("bcryptjs");
const validator=require("validator");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"it should not greater than 3 characters"],
        maxlength:[20,"it should not less than 20 characters"],
        validate:[validator.isAlpha,"Name  Should contain characters"],
 },
 email:{
    type:String,
    required:true,
    validate:[validator.isEmail,"Invalid email"],
    unique:true
 },
 password:{
    type:String,
    required:true,
    select:false
 },
 passwordConfirm:{
    type:String,
    required:true,
    validate:{
        validator:function(val){
            return this.password===val;
        },
        message:"passwordConfirm should match the password",
    }
 },
 photo:{
    type:String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw2KI4n-X1poAmBy-2Xv2uQR&ust=1706021697925000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLCJsZ6g8YMDFQAAAAAdAAAAABAY"
 },
 passwordChangedAt:{
    type:Date,
 }
,
passwordResetToken:String,
passwordResetExpires:Date,

},{
    timestamps:true,
});
UserSchema.pre('save',async function(next){
    if(!this.isModified('password'))
    {
      return next();
    }
    this.password=await bcryptjs.hash(this.password,12);
    this.passwordConfirm=undefined;
    next();

})
UserSchema.pre('save',async function(next){
    if(!this.isModified('password')||this.isNew)
    {
        return next();
    }
    this.passwordChangedAt=Date.now()-1000;
    next();
})
UserSchema.methods.changedPasswordAfter=function(JWTTimestamp)
{
    if(this.passwordChangedAt)
    {
        const changedTimestamp=parseInt(this.passwordChangedAt.getTime()/1000,10);
        return JWTTimestamp <changedTimestamp;
    }
    return false;
}

UserSchema.methods.validatePassword=async function(candidatePassword,userPassword){
    return await bcryptjs.compare(candidatePassword,userPassword);
}
const User=mongoose.model('user',UserSchema);
module.exports=User;