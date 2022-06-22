
- goto terminal
    > npm init
    > npm install express
    > npm install nodemon
- run project goto root
    > nodemon server.js
- modify file server.js
    const express = require("express")
    const app = express();

    app.get("/",(req,res)=>{
        res.end("Hello node server")
    })

    app.get("/api/teacher",(req,res)=>{
        // req.url
        var arr_teacher = [
            {
                id : 1,
                name : "Sok",
                email : "sok@gmail.com"
            },
            {
                id : 1,
                name : "Sok",
                email : "sok@gmail.com"
            }
        ]
        var data  = {
            teacher : arr_teacher
        }
        res.json(data)
    })


    app.listen(8080,()=>{
        console.log("Server run on port : localhost:8080")
    })
- install thunder client 
    - create collection
    - create folder
    - create requset