const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("<h1>Hello Node.js</h21>")
})

app.get("/api/teacher",(req,res)=>{
    var obj = {}
    obj.method = req.method
    obj.url = req.url
    obj.path = req.path
    obj.baseUrl = req.baseUrl
    obj.ip = req.ip
    obj.hostname = req.hostname
    obj.originalUrl = req.originalUrl
    res.json(obj)
})

app.post("/api/teacher",(req,res)=>{
    var obj = {}
    obj.body = req.body
    res.json(obj)
})

app.put("/api/teacher",(req,res)=>{
    res.send("put teacher")
})
app.delete("/api/teacher",(req,res)=>{
    res.send("delete teacher")
})





const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server run on port : localhost:"+port)
})