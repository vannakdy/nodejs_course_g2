const mysql = require("mysql");
// production
// const db = mysql.createConnection({
//     host : "bmfpjkmbvkhqfvrnnhms-mysql.services.clever-cloud.com",
//     database : "bmfpjkmbvkhqfvrnnhms",
//     user : "urlwbyfzj0u46e2i",
//     password : "m24Jnx6IabvpjMlnuU5x"
// })
//localhost
const db = mysql.createConnection({
    host : "localhost",
    database : "nodejs_g2",
    user : "root",
    password : ""
})
db.connect();
module.exports = db;