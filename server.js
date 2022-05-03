// require variables needed for code to run
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
// connection for sql to server.js file
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);
// inquirer prompts for employees- will be multiple different
  // what would you like to do ?
    // subset of questions to populate schema tables
    // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function initPrompt() {
  const startQuestions = [
    {
      name: "choice",
      type: "list",
      message: "what would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
    },
  ];

  inquirer.prompt(startQuestions).then((response) => {
    switch (response.choice) {
      case "view all departments":
        viewDepts();
        break;

      case "view all roles":
        viewRoles();
        break;
      case "view all employees":
        viewEmployees();
        break;

      case "add a department":
        addDept();
        break;

      case "add a role":
        addRole();
        break;

      case "add an employee":
        addEmployee();
        break;

      case "update an employee role":
        updateEmployee();
        break;
    }
  });
}
// after select all deps, show formatted table with dep names and id
const viewDepts = () => {
  var query = "SELECT * FROM department";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
};
// view all roles then I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewRoles = () => {
  console.log('viewing all roles')
  var query = "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id";
  db.query(query, function (err, res) {
    console.log('view query of all roles')
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
};
//view all employees- show formatted table w employee data- employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewEmployees = () => {
  var query = "SELECT * FROM employee";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
};
// add a department- prompted to enter the name of the department and that department is added to the database
const addDept = () => {
  inquirer
    .prompt({
      name: "dept",
      message: "Enter new department.",
      type: "input",
    })
    .then(function (res) {
      const query = `INSERT INTO department (name) VALUES ("${res.dept}")`;
      console.log(`Added ${res.dept} to the database`);
      db.query(query, function (err, res) {
        if (err) {
          throw err;
        }
        initPrompt();
      });
    });
};
// add a role- prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "role",
        message: "Enter new role.",
        type: "input",
      },
      {
        name: "roleSalary",
        message: "Enter the salary of the role.",
        type: "input",
      },
      {
        name: "roleDept",
        message: "Enter the department id of the role- reference view all departments to see id numbers.",
        type: "input",
        
      },
    ])
    .then(function (res) {
      const query = `INSERT INTO role (title, salary, department_id) VALUES ("${res.role}", "${res.roleSalary}", "${res.roleDept}")`;
      console.log(`Added ${res.role} to the database`);
      db.query(query, function (err, res) {
        if (err) {
          throw err;
        }
        initPrompt();
      });
    });
};
// add an employee- prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        message: "Enter the employees first name",
        type: "input",
      },
      {
        name: "lastName",
        message: "Enter the employees last name",
        type: "input",
      },
      {
        name: "employeeRole",
        message: "Enter the employees role id- reference from view all roles.",
        type: "input",
      },
      {
        name: "empManager",
        message: "Enter the employees manager id- reference from view all employees.",
        type: "input",
      },
    ])
    .then(function (res) {
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${res.firstName}", "${res.lastName}", "${res.employeeRole}", "${res.empManager}")`;
      console.log(`Added ${res.firstName} ${res.lastName} to the database`);
      db.query(query, function (err, res) {
        if (err) {
          throw err;
        }
        initPrompt();
      });
    });
};
// update an employee role-  prompted to select an employee to update and their new role and this information is updated in the database
const updateEmployee = () => {
  inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the employees id you would like to update- reference the view all employees list",
      name: "empId"
    },
    {
      type: "input",
      message: "Enter the new role ID for that employee",
      name: "role"
    }
  ])
  .then(function (res) {
      const query = `UPDATE employee SET role_id = "${res.role}" WHERE employee.id = "${res.empId}"`;
      console.log('employee has been updated.')
      db.query(query, function (err, res) {
        if (err) {
          throw err;
        }
        initPrompt();
      })
    });
};

initPrompt();
