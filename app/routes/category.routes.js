
const {
    getAll,
    create,
    update,
    remove
} = require("../controller/category.controller")
const categroy = (app) => {
    app.get("/api/category",getAll)
    app.get("/api/category/:id",getAll)
    app.post("/api/category",create)
    app.put("/api/category",update)
    app.delete("/api/category",remove)
} 
module.exports = categroy;