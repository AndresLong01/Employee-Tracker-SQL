const connection = require("./connection.js");
// const functionality = require("../server.js")
// const inquirer = require("inquirer");

const orm = {
    viewAll: () => {
        let query = `
        SELECT employee.id, first_name, last_name, roles.title, roles.salary, dep_name
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
        ORDER BY ?? DESC`
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
        let roleID;
        switch (title){
            case "Lead Programmer": 
                roleID = 1;
                break;
            case "Sales Lead":
                roleID = 2;
                break;
            case "Hiring Manager":
                roleID = 3;
                break;
            case "Accountant":
                roleID = 4;
                break;
            case "Marketing Director":
                roleID = 5;
                break;
            default:
                break;
        }
        let queryOne = `
        INSERT INTO employee (first_name, last_name, role_id)
        VALUES (?,?,?);`
        connection.query(queryOne,[first, last, roleID], (err, result) =>{
            if (err) throw err;
            console.log("\nAdded New Employee");
            // console.log(result)
            // functionality.begin();
        });
    },
    remEmployee: (id) =>{
        query =`
        DELETE FROM employee WHERE employee.id = ?`
        connection.query(query,[id], (err,res) =>{
            if(err) throw err;
            console.log("\nDeleted.");
        })
    },
    updateRole: (employee, title) => {
        //The proper thing to do here is set a sort of filter within the connection so as for it 
        //to update live, but I wanted to see functionality first
        let roleID;
        switch (title){
            case "Lead Programmer": 
                roleID = 1;
                break;
            case "Sales Lead":
                roleID = 2;
                break;
            case "Hiring Manager":
                roleID = 3;
                break;
            case "Accountant":
                roleID = 4;
                break;
            case "Marketing Director":
                roleID = 5;
                break;
            default:
                break;
        }
        query = `
        UPDATE employee SET role_id = ? WHERE employee.id = ?`
        connection.query(query, [roleID, employee], (err, result)=>{
            if(err)throw err;
            console.log("\nUpdated");
        })
    },
    addDepartments: (depName) => {
        query = `
        INSERT INTO department (dep_name)
        VALUES (?)`
        connection.query(query, [depName], (err, result) => {
            if (err) throw err;
            console.log("\nDepartment Added.");
        })
    }
}



module.exports = orm;