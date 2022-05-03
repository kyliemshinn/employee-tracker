# employee-tracker

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

![GitHub language count](https://img.shields.io/github/languages/count/kyliemshinn/employee-tracker)

## Table of Contents

- [Description](#description)
- [Criteria](#criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Questions](#questions)
- [License](#license)

## Description

Employee tracker is a project that is designed to generate a table to be able to view and manage necessary parts to a company for organization. This tool is meant to help with organization to start a company and keep track of the employees, update their roles if necessary, create new departments, and create new roles. If the user just wants to see the information they have, they can view that information as well.

## Criteria

GIVEN a command-line application that accepts user input
- WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 


## Installation

The user will need to run `npm install` to get all the necessary materials for the code to run.

## Usage

Run `node server.js` to get the code program to run. Please reference video for more details on usage of this project.


![employee tracker gif](./assets/employeetrackergif.gif)

## Technologies Used

- Javascript
- Node.js
- MySQL
- console.table
- Inquirer

## Contributors

This backend employee tracker was created by Kylie Shinnn.

- GitHub: [github](https://github.com/kyliemshinn)
- LinkedIn: [linkedin](https://www.linkedin.com/feed/)

## Questions

For additional information please contact me at:
Email: kyliemshinn@gmail.com

## License

MIT License

Copyright (c) [2022] [Kylie Shinn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
