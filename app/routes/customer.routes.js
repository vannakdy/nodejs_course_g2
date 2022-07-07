const customer = (app) => {
    const {getAll,getOne,create,remove} = require("../controller/customer.controller")
    // const customer_controller = require("../controller/customer.controller")
    app.get("/api/customer",getAll)
    app.get("/api/customer/:id",getOne)
    app.post("/api/customer",create)
    app.delete("/api/customer",remove)
}
module.exports = customer;