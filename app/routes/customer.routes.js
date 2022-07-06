const customer = (app) => {
    const {getAll,getOne} = require("../controller/customer.controller")
    // const customer_controller = require("../controller/customer.controller")
    app.get("/api/customer",getAll)
    app.get("/api/customer/:id",getOne)
}
module.exports = customer;