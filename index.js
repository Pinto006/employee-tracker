const inquirer = require('inquirer');
const {   viewEmployees, 
  viewRoles, 
  viewDepartments,
  addDepartment,
  addEmployee,
  removeEmployees,
  updateEmployeeRole,
  addRole, } = require('./utils/functions');

const init = function () {

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
            viewEmployees()
            .then((queryResults)=>{
              console.table(queryResults)
            init()
            })
            break;
            
          case "View All Roles":
            viewRoles()
            .then((queryResults)=>{
              console.table(queryResults)
            init()
            })
            
            break;

          case "View All Departments":
            viewDepartments()
            .then((queryResults)=>{
              console.table(queryResults)
            init()
            })      
            break;
            
          case "Add Department":
              addDepartment();
              // .then((queryResults)=>{
              //   console.table(queryResults)
              // init()
              // })
           break;

          case "Add Employee":
            addEmployee(); 
            // .then((queryResults)=>{
            //   console.table(queryResults)
            // init()
          // })
            break;
  
          case "Remove Employees":
            removeEmployees()
            .then((queryResults)=>{
              console.table(queryResults)
            init()
          })
            break;
  
          case "Update Employee Role":
            updateEmployeeRole()
            .then((queryResults)=>{
              console.table(queryResults)
            init()
          })
            break;
  
          case "Add Role":
            addRole();
            // .then((queryResults)=>{
            //   console.table(queryResults)
            // init()
          // })
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

  module.exports = init;
