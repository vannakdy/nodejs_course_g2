const{
    getAll,
    getOne,
    create, 
    update,
    remove
} = require("../controller/course.controller");

const {validateToken} = require("../controller/auth.constroller")
const course = (app)=>{
    app.post("/api/course",validateToken,getAll)
    app.get("/api/course/:id",validateToken,getOne)
    app.post("/api/course",validateToken,create)
    app.put("/api/course",validateToken,update)
    app.delete("/api/course",validateToken,remove)

}
module.exports = course;