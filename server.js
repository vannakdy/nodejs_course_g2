const express = require("express")
const jwt = require("jsonwebtoken")
const {config} = require("./app/config/hepler")
// const bcrypt = require("bcrypt");
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
require("./app/routes/category.routes")(app)
require("./app/routes/course.routes")(app)
require("./app/routes/auth.routes")(app)

// const passEncrypt = bcrypt.hashSync("123",8);
// if(bcrypt.compareSync("123",passEncrypt)){
//     console.log("correct")
// }

// console.log(passEncrypt)


const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server run on port : localhost:"+port)
})

