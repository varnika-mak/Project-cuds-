const express =require("express")
const routepost = express.Router();
const schema = require("../Models/Schema");
const Media = require("../utilities/multer")
const fs =require('fs')
routepost.post("/save" , Media.single("avatar"),async(req,res) =>{
 try {

  const { Title, Description, Brand , Price, Category } = req.body
   const image =  req.file


   if(!Title|| !Description || !Brand || !Price || !Category ){
    return res.status(200).json({msg:"fill all fields"})
   }
   if(!image){
    return res.status(404).json({
      message : "No image found."
    })
   }
   const newproduct = new schema({
    Title,
    Brand,
    Description,
    Price,
    Category,
    File:image.path
   })
   const saveproduct = await newproduct.save()
   res.status(201).json({
    msg:"data saved",
    data: saveproduct
   })
 } catch (error) {
    res.status(500).json(error)
 }   
})
routepost.get("/data",async(req,res)=>{
  const data = await schema.find({})
  res.status(200).json({
    success:true,
    message:"here is your data",
    data:data
  })
})
routepost.get("/all",async(req,res)=>{
  try {
    const data =await schema.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({msg:error})
  }
})
routepost.get("/all/:id",async (req,res)=>{
  try {
  const {id} =req.params 
    const data = await schema.findById({_id:id})
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({msg:error})
  }
})
routepost.patch("/update/:id", async (req,res) =>{
  const {id} =req.params
  try {
    await schema.findByIdAndUpdate({_id:id}, {$set: req.body})
    res.status(200).json({msg:"user updated"})
  } catch (error) {
    res.status(500).json({msg:error})
  }
})
routepost.delete("/delete/:id",async(req,res)=>{
  try {
    const{id} =req.params
   const data = await schema.findByIdAndDelete({_id:id})
   if(data.File){
    fs.unlink(data.File,(err)=>{
      return data.File
    })
   }
  return res.status(200).json({msg:"user deleted"})
  } catch (error) {
    res.status(500).json({msg:error})
  }
  
})
routepost.get("/data/:Title", async (req, res) => {
  const { Title } = req.params;
  try {
      const find = await schema.find({ Title: Title });
      if (find.length > 0) {
          return res.status(200).json({ msg: "Successful", find });
      } else {
          return res.status(404).json({ msg: "No data found with the given name" });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error searching for students" });
  }
});
module.exports =routepost