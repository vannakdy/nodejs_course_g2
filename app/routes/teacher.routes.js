
const teacher = (app) => {
    const router = require("express").Router(); 
    const teacherController = require("../controller/teacher.controller")
    // router.get("/api/teacher",(req,res)=>{
    //     res.send("You call api get teacher")
    // })
    // router.post("/api/teacher",(req,res)=>{
    //     res.send("You requset post teacher")
    // })
    router.get("/api/teacher",teacherController.getLists)
    router.post("/api/teacher",teacherController.create)
    router.put("/api/teacher",teacherController.edit)
    router.delete("/api/teacher",teacherController.remove)

    app.use(router);
}

module.exports = teacher;