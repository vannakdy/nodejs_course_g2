
const {
    getAll,
    create,
    update,
    remove
} = require("../controller/category.controller")
const {validateToken} = require("../controller/auth.constroller")
const categroy = (app) => {
    app.get("/api/category",validateToken,getAll)
    app.get("/api/category/:id",validateToken,getAll)
    app.post("/api/category",validateToken,create)
    app.put("/api/category",validateToken,update)
    app.delete("/api/category",validateToken,remove)
} 
module.exports = categroy;