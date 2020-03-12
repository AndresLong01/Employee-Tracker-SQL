const inquirer = require("inquirer");
const orm = require("./config/orm.js");

//This is solely used for inquirer prompts
let basicTitles= ["Lead Programmer", "Sales Lead", "Hiring Manager", "Accountant", "Marketing Director"];
let basicDepartment = ["Engineering", "Sales", "Human Resources", "Accounting", "Marketing"];

console.log(`
________________________________________________________________________
|      _)      _)      _)      _)      _)      _)      _)      _)       |
|     (_      (_      (_      (_      (_      (_      (_      (_        |
|_   _  )_   _  )_   _  )_   _  )_   _  )_   _  )_   _  )_   _  )_   _  |
| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|
|       (_      (_      (_      (_      (_      (_      (_      (_      |
|        _)      _)       WELCOME TO MY COMPANY          _)      _)     |
|  _   _(  _   _(  _   _(  _   _(  _   _(  _   _(  _   _(  _   _(  _   _|
|_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |
|      _)      _)      _)      _)      _)      _)      _)      _)       |
|     (_      (_      (_      (_      (_      (_      (_      (_        |
|_______(_______(_______(_______(_______(_______(_______(_______(_______|`)

const execute = {
    begin: function() {
        inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do?",
            choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Salary",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Add Department",
            "Add Role",
            "Exit"
        ],
        name: "choice"
        }
        ]).then((data) => {
            if (data.choice === "View All Employees"){
                orm.viewAll();
                execute.begin();
            }
            else if (data.choice === "View All Employees by Department"){
                orm.viewOrdered("department.id");
                execute.begin();
            }
            else if(data.choice === "View All Employees by Salary"){
                orm.viewOrdered("roles.salary");
                execute.begin();
            }
            else if(data.choice === "Add Employee"){
                inquirer.prompt([
                    {
                        message: "What is the new Employee's first name?",
                        name: "name"
                    },
                    {
                        message: "What is the new Employee's last name?",
                        name: "last"
                    },
                    {
                        type: "list",
                        message: "Which role is the new Employee filling in?",
                        choices: basicTitles,
                        name: "title"
                    }
                ]).then((extData)=> {
                    orm.addEmployee(extData.name, extData.last, extData.title, extData.salary)
                    execute.begin();
                });
            }
            else if(data.choice === "Remove Employee"){
                inquirer.prompt([
                    {
                        message: "What Employee ID would you like to remove?",
                        name: "employee"
                    }
                ]).then((remData) => {
                    orm.remEmployee(remData.employee)
                    execute.begin();
                })
            }
            else if(data.choice === "Update Employee Role"){
                inquirer.prompt([
                    {
                        message: "What Employee ID would you like to Update?",
                        name: "updateRole"
                    },
                    {
                        type: "list",
                        message: "What new role is this person fulfilling?",
                        choices: basicTitles,
                        name: "newRole"
                    }
                ]).then((roleData) => {
                    orm.updateRole(roleData.updateRole, roleData.newRole);
                    execute.begin();
                })
            }
            else if(data.choice === "Add Department"){
                inquirer.prompt([
                    {
                        message: "Name your new Department",
                        name: "newDepartment"
                    }
                ]).then((manageData) => {
                    basicDepartment.push(manageData.newDepartment);
                    orm.addDepartments(manageData.newDepartment);
                    execute.begin();
                })
            }
            else if(data.choice === "Add Role"){
                inquirer.prompt([
                    {
                        message: "Name your new Role",
                        name: "newRole"
                    }
                ]).then((manageData) => {
                    basicRole.push(manageData.newRole);
                    orm.addRoles(manageData.newRole);
                    execute.begin();
                })
            }
            else if(data.choice === "Exit"){
                return;
            }
        })
    },
};

// module.exports = execute;
execute.begin();