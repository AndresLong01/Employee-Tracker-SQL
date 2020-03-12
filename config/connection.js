const mysql = require("mysql");
require("dotenv").config();
//Creating that connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MY_PASS,
    database: "tracker_DB"
});

//Once we connect, we're in
connection.connect(err => {
    if(err) throw err;
    // console.log("Here we go!");
})
//Exporting to manage priorities seperately
module.exports = connection;