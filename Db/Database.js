const mongoose =require("mongoose");

async function main() {
    try {
        await mongoose.connect('mongodb+srv://varnikamakkar:eggy%401234@varnika.6pwfc.mongodb.net/product?retryWrites=true&w=majority&appName=varnika')
        console.log("database connected")
    } catch (error) {
        console.log("error connecting to database",err);
    }
}
module.exports=main;