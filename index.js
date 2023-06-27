const inquirer = require('inquirer');
const {   viewEmployees, 
  viewRoles, 
  viewDepartments,
  addDepartment,
  addEmployee,
  removeEmployees,
  updateEmployeeRole,
  addRole, } = require('./utils/functions');

function init() {

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
            viewEmployees();
            init();
            break;
            
          case "View All Roles":
            viewRoles();
            // init();
            break;

          case "View All Departments":
            viewDepartments();
            // init();
            break;
            
          case "Add Department":
              addDepartment();
              // init();
              break;

          case "Add Employee":
            addEmployee();
            // init();
            break;
  
          case "Remove Employees":
            removeEmployees();
            // init();
            break;
  
          case "Update Employee Role":
            updateEmployeeRole();
            // init();
            break;
  
          case "Add Role":
            addRole();
            // init();
            break;
  
          case "Quit":
            connection.quit();
            break;
          default:
            break;
        }
      });
  }

  init();
