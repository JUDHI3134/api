const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const port = 3000;

const apiData = require("./data.json")

app.get("/",(req,res)=>{
    res.send("server run Perfectlly")
})

app.get("/service",(req,res)=>{
    res.send(apiData)
})


app.listen(port,()=>{
    console.log(`server run port number ${port}`)
})