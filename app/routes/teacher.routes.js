
const teacher = (app) => {
    const router = require("express").Router(); 
    const teacherController = require("../controller/teacher.controller")
    const {validateToken} = require("../controller/auth.constroller")
    router.get("/api/teacher",validateToken,teacherController.getLists)
    router.get("/api/teacher/:id",validateToken,teacherController.getOne) // add route type params
    router.post("/api/teacher",validateToken,teacherController.create) 
    router.put("/api/teacher",validateToken,teacherController.edit)
    router.delete("/api/teacher",validateToken,teacherController.remove)

    // router.post("/api/teacher/getlist",teacherController.getLists)
    // router.post("/api/teacher/getlist/:id",teacherController.getOne)
    // router.post("/api/teacher/create",teacherController.create)
    // router.post("/api/teacher/edit",teacherController.edit)
    // router.post("/api/teacher/remove",teacherController.remove)
    // router.post("/api/teacher/getTotal",teacherController.remove)
    // router.post("/api/teacher/getSummary",teacherController.remove)
    // router.post("/api/teacher/report",teacherController.remove)

    app.use(router);
}

module.exports = teacher;