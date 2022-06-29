
const teacher = (app) => {
    const router = require("express").Router(); 
    const teacherController = require("../controller/teacher.controller")

    router.get("/api/teacher",teacherController.getLists)
    router.get("/api/teacher/:id",teacherController.getOne) // add route type params
    router.post("/api/teacher",teacherController.create) 
    router.put("/api/teacher",teacherController.edit)
    router.delete("/api/teacher",teacherController.remove)

    app.use(router);
}

module.exports = teacher;