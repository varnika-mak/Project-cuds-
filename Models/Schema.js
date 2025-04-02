const mongoose =require("mongoose");
const data =new mongoose.Schema({
    Title:{
        required:true,
        type:String
    },
    Brand:{
        required:true,
        type:String
    },
    Price:{
        required:true,
        type:String 
    },
    Description:{
        required:true,
        type:String  
    },
    Category:{
        required:true,
        type:String  
    },
    File:{
        required:true,
        type:String
    }
})
const Schema =mongoose.model("products",data);
module.exports =Schema
