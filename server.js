// require variables needed for code to run
const mysql = require("mysql2");
const inquirer = require('inquirer');
const cTable = require('console.table');
// connection for sql to server.js file
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );
// inquirer prompts for employees- will be multiple different 
    // what would you like to do ?
    // subset of questions to populate schema tables
        // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    function initPrompt() {
        const startQuestions = [{
            name: "choice",
            type: "list",
            message: "what would you like to do?",
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }]

     inquirer.prompt(startQuestions).then(response => { 

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
    })
}
    // after select all deps, show formatted table with dep names and id
    const viewDepts =() => {
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(res)
          });
          initPrompt();
    };
    // view all roles then I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    const viewRoles =() => {

    }
    //view all employees- show formatted table w employee data- employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const viewEmployees =() => {

    }
    // add a department- prompted to enter the name of the department and that department is added to the database
    const addDept =() => {

    }
    // add a role- prompted to enter the name, salary, and department for the role and that role is added to the database
    const addRole =() => {

    }
    // add an employee- prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    const addEmployee =() => {

    }
    // update an employee role-  prompted to select an employee to update and their new role and this information is updated in the database 
    const updateEmployee =() => {

    }

initPrompt();

            