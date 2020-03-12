DROP DATABASE IF EXISTS tracker_DB;
CREATE DATABASE IF NOT EXISTS tracker_DB;

USE tracker_DB;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL
    , dep_name VARCHAR(30) NOT NULL
    , PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT AUTO_INCREMENT NOT NULL
    , title VARCHAR(30) NOT NULL
    , salary DECIMAL(10,2) NOT NULL
    , department_id INT 
    , PRIMARY KEY (id)
    , FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
	id INT UNSIGNED AUTO_INCREMENT NOT NULL
    , first_name VARCHAR(30)
    , last_name VARCHAR(30)
    , role_id INT 
    , manager_id INT UNSIGNED DEFAULT NULL
    , PRIMARY KEY (id)
    , FOREIGN KEY (role_id) REFERENCES roles(id)
    , FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);