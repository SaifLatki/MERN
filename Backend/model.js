import mongoose from "mongoose";

const User=mongoose.Schema({
    name:String,
    email:String,
    age:Number 
})

export default mongoose.model("User",User); 