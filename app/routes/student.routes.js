
const student = (app) => {
    const router = require("express").Router();
    const student_controller = require("../controller/student.contoller")

    router.get("/api/student",student_controller.getList)
    router.post("/api/student",student_controller.create)
    router.put("/api/student",student_controller.edit)
    router.delete("/api/student",student_controller.remove)

    app.use(router);

}

module.exports = student;