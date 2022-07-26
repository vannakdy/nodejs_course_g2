const{
    getAll,
    getOne,
    create, 
    update,
    remove
} = require("../controller/course.controller");
const course = (app)=>{
    app.post("/api/course",getAll)
    app.get("/api/course/:id",getOne)
    app.post("/api/course",create)
    app.put("/api/course",update)
    app.delete("/api/course",remove)

}
module.exports = course;