-- DEPARTMENT NAMES- ENGINEER, FINANCE, LEGAL, SALES
INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");
       

-- ROLE TITLE- SALESLEAD; dep sales, SALESPERSON; dep sales, LEAD ENGINEER dep engineering, SOFTWARE ENGINEER; dep engineering, ACCOUNT MANAGER dep finance, ACCOUNTANT; dep finance, LEGAL TEAM LEAD; dep legal, LAYWER; dep legal
    --associated salary in order 100k, 80k, 150k, 120k, 160k, 125k, 250k, 190k
INSERT INTO role (title, salary, department_id)
VALUES  ("Saleslead", 100000, 4),
        ("Salesperson", 80000, 4),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2),
        ("Accountant", 125000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Laywer", 190000, 3);

-- show first name, last name title, dep, salary manager
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tony", "Stark", 4, 1),
        ("Steve", "Rodgers", 4, NULL),
        ("Thor", "Odinson", 1, 2),
        ("Loki", "Odinson", 1, NULL),
        ("Wanda", "Maximoff", 2, 3),
        ("James", "Rhodes", 2, NULL),
        ("Natasha", "Rominoff", 3, 4),
        ("Samuel", "Wilson", 3, NULL);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee; 