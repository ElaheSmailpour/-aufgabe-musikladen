const express=require("express")
const app=express()
const orderRouter = require('./routes/orders');
const verbindeDB = require("./mongo-db");
verbindeDB();
app.use('/orders', orderRouter);
app.get("/user",(req,res,get)=>{
    res.send("hallo Eli!")
})
app.listen(3000,()=>console.log("server läuf!"))


module.exports = app;