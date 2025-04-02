require("dotenv").config()
const express =require("express")
const app =express()
const cors =require("cors")
const main = require("./Db/Database")
const routepost =require("./controllers/route")
const port =process.env.PORT || 3000
// const image =require("./controllers/image")
// const image =require("./controllers/image")

const path = require("path");

app.use("/Media", express.static(path.join(__dirname, "Media")));


app.use(cors())
app.use(express.json())
app.use("/api",routepost)
// app.use("/save",routepost)
// app.use("/api",image)

main()
app.listen(port,() =>{
    console.log("server running....")
})