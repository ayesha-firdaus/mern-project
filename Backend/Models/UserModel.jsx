const { default: mongoose } = require("mongoose");
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
 }



},{
    timestamps:true,
})
const User=mongoose.model('user',UserSchema);
module.exports=User;