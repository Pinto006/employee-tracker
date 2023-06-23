const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

  function prompt() {

    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "Add Department",
          "Add Employee",
          "Remove Employees",
          "Update Employee Role",
          "Add Role",
          "Quit"]
      })
      .then(function ({ task }) {
        switch (task) {
          case "View All Employees":
            viewEmployee();
            break;
            
          case "View All Roles":
            viewEmployeeByDepartment();
            break;

          case "View All Departments":
            viewEmployeeByDepartment();
            break;
            
          case "Add Department":
                addEmployee();
                break;

          case "Add Employee":
            addEmployee();
            break;
  
          case "Remove Employees":
            removeEmployees();
            break;
  
          case "Update Employee Role":
            updateEmployeeRole();
            break;
  
          case "Add Role":
            addRole();
            break;
  
          case "Quit":
            connection.end();
            break;
        }
      });
  }