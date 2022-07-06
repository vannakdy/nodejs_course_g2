const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("");
})

// import
require("./app/routes/teacher.routes")(app)
require("./app/routes/student.routes")(app)
require("./app/routes/customer.routes")(app)


const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server run on port : localhost:"+port)
})

