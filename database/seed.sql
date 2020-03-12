-- Main seeding
USE tracker_DB;

INSERT INTO department (dep_name)
VALUE ("Engineering")
,("Human Resources")
,("Marketing")
,("Sales")
,("Accounting");

INSERT INTO roles (title, salary, department_id)
VALUE ("Lead Programmer", 80000.00, 1)
,("Sales Lead", 60000.00, 4)
,("Hiring Manager", 65000.00, 2)
,("Accountant", 57000.00, 5)
,("Marketing Director", 69000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andres", "Long", 1, null)
,("Robin", "Aguilar", 2, null)
,("Andres", "Ledesma", 3, null)
,("Robbie", "Harris", 4, null)
,("Andy", "Richard", 5, null);