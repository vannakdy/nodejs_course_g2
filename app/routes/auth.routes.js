


const {
    createUser,
    login,
    changeStatusUser
} = require("../controller/auth.constroller")
const auth = (app) => {
    app.post("/api/auth/createUser",createUser)
    app.post("/api/auth/login",login)
    app.post("/api/auth/changeStatusUser",changeStatusUser)
} 
module.exports = auth;