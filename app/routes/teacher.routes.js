
const teacher = (app) => {
    const router = require("express").Router(); 
    const teacherController = require("../controller/teacher.controller")

    router.get("/api/teacher",teacherController.getLists)
    router.get("/api/teacher/:id",teacherController.getOne) // add route type params
    router.post("/api/teacher",teacherController.create) 
    router.put("/api/teacher",teacherController.edit)
    router.delete("/api/teacher",teacherController.remove)

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