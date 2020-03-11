const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "javascriptrox",
    database: "tracker_DB"
});

connection.connect(err => {
    if(err) throw err;
    // console.log("Here we go!");
})

module.exports = connection;