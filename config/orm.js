const connection = require("./connection.js");
// const functionality = require("../server.js")
// const inquirer = require("inquirer");

//Wanted to split my issues on different files
const orm = {
    viewAll: () => {
        let query = `
        SELECT employee.id, first_name, last_name, roles.title, roles.salary, dep_name
        FROM employee
        LEFT JOIN roles
        ON role_id = roles.id
        LEFT JOIN department
        ON department_id = department.id;`
        connection.query(query, (err, result) =>{
            if (err) throw err;
            console.log("\n");
            console.table(result);
            //
            console.log("\n\n\n\n\n\n\n\n\n");
            // functionality.begin();
        });
    },
    viewOrdered: (val) => {
        let query = `
        SELECT employee.id, first_name, last_name, roles.title, roles.salary, dep_name
        FROM employee
        LEFT JOIN roles
        ON role_id = roles.id
        LEFT JOIN department
        ON department_id = department.id
        ORDER BY ?? DESC;`
        connection.query(query,[val], (err, result) =>{
            if (err) throw err;
            console.log("\n");
            console.table(result);
            //
            console.log("\n\n\n\n\n\n\n\n\n");
            // functionality.begin();
        });
    },
    addEmployee: (first, last, title) => {
        let queryOne = `
        INSERT INTO employee (first_name, last_name, role_id)
        VALUES (?,?,?);`
        connection.query(queryOne,[first, last, title], (err, result) =>{
            if (err) throw err;
            console.log("\nAdded New Employee");
            // console.log(result)
            // functionality.begin();
        });
    },
    remEmployee: (id) =>{
        query =`
        DELETE FROM employee WHERE employee.id = ?;`
        connection.query(query,[id], (err,res) =>{
            if(err) throw err;
            console.log("\nDeleted.");
        })
    },
    updateRole: (employee, roleID) => {
        //The proper thing to do here is set a sort of filter within the connection so as for it 
        //to update live, but I wanted to see functionality first
        query = `
        UPDATE employee SET role_id = ? WHERE employee.id = ?;`
        connection.query(query, [roleID, employee], (err, result)=>{
            if(err)throw err;
            console.log("\nUpdated");
        })
    },
    addDepartments: (depName) => {
        query = `
        INSERT INTO department (dep_name)
        VALUES (?);`
        connection.query(query, [depName], (err, result) => {
            if (err) throw err;
            console.log("\nDepartment Added.");
        })
    },
    addRoles: (roleName, salary, depID) => {
        query = `
        INSERT INTO roles (title, salary, department_id)
        VALUES (?,?,?);`
        connection.query(query, [roleName, parseInt(salary), depID], (err, result) => {
            if (err) throw err;
            console.log("\nRole Added.");
        })
    },
    exit: () => {
        connection.end();
    }
}



module.exports = orm;