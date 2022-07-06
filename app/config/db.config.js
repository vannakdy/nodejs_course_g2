const mysql = require("mysql");

const db = mysql.createConnection({
    host : "localhost",
    database : "nodejs_g2",
    user : "root",
    password : ""
})

db.connect();

module.exports = db;