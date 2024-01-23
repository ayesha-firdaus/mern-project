const app=require("./app")
const port=9000;
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
let db=process.env.mongo_url.replace('<password>',process.env.password)
mongoose.connect(db).then(con=>{
    console.log("db connected sucessfully")
})
app.listen(port,()=>{
    console.log("server is listening")
})
