const mongoose =require("mongoose");
const data =new mongoose.Schema({
    FullName:{
        required:true,
        type:String
    },
    Email:{
        required:true,
        type:String
    },
    Password:{
        required:true,
        type:String 
    }
})
const Schema =mongoose.model("users",data);
module.exports =Schema
