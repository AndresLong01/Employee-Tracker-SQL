const connection = require("./connection.js");
// const functionality = require("../server.js")
// const inquirer = require("inquirer");

const orm = {
    viewAll: () => {
        let query = `
SELECT employee.id, first_name, last_name, roles.title, roles.salary, dep_name, manager_id
FROM employee
LEFT JOIN roles
ON role_id = roles.id
LEFT JOIN department
ON department_id = department.id`
        connection.query(query, (err, result) =>{
            if (err) throw err;
            console.log("\n");
            console.table(result);
            //
            console.log("\n\n\n\n\n\n\n\n\n");
            // functionality.begin();
        })
    }
}

module.exports = orm;