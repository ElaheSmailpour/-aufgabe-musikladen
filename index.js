const express=require("express")
const app=express()
const verbindeDB = require("./mongo-db");
verbindeDB();

app.get("/user",(req,res,get)=>{
    res.send("hallo Eli!")
})
app.listen(3000,()=>console.log("server läuf!"))