const inquirer = require('inquirer');
const { viewEmployees,
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
            break;
            
          case "View All Roles":
            viewRoles();
            break;

          case "View All Departments":
            viewDepartments();
            break;
            
          case "Add Department":
              addDepartment();
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
            connection.quit();
            break;
          default:
            break;
        }
      });
  }

  init();
