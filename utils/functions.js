const mysql = require('mysql2');
require('dotenv').config();
const cTable = require('console.table');
const inquirer = require('inquirer');
const { init } = require('../index.js');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the classlist_db database.`)
  );

function viewEmployees() {
  return db.promise().query(`SELECT *  FROM employee`)

  .then(([results]) => {
    return(results)
  })
  .catch(console.log)
  .then( (results) => {
    console.table(results)
    
  })};



function viewRoles () {
  return db.promise().query(`SELECT *  FROM role`)

  .then(([results]) => {
    return(results)
  })
  .catch(console.log)
  .then( (results) => {
    console.table(results)

  })};

function viewDepartments () {
  return db.promise().query(`SELECT *  FROM department`)

  .then(([results]) => {
    return(results)
  })
  .catch(console.log)
  .then( (results) => {
    console.table(results)
    
  })};

function addDepartment () {
  inquirer.prompt([
      {
          type: 'input', 
          name: 'department_name', 
          message: 'Please type in the name of the department you would like to add?',
      }
      ]).then(function (result) {
  const sql = `INSERT INTO department (department_name)
  VALUES (?)`;
const params = [result.department_name];
console.log(params)
db.query(sql, params, (err, queryResult) => {
  if (err) {
    console.log("Error", err);
    return;
  };
  console.table(queryResult);
});
viewDepartments();
})};

function addEmployee () {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "what is the employee's first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "what is the employee's last name?"
    },
    {
      type: "list",
      name: "role_id",
      choices: roleChoice,
      message: "what is the employee's role?"
    },
    {
      type: "list",
      name: "manager_id",
      choices: employeeChoice,
      message: "who is the employee's manager? (could be null)"
    },
    ]).then(function (result) {
const sql = `INSERT INTO department (department_name)
VALUES (?)`;
const params = [result.department_name];
console.log(params)
db.query(sql, params, (err, queryResult) => {
if (err) {
  console.log("Error", err);
  return;
};
console.table(queryResult);
});
viewDepartments();
})};


function removeEmployees () {

}; 

function updateEmployeeRole () {

};

function addRole () {
  inquirer.prompt([
    {
        type: 'input', 
        name: 'title', 
        message: 'Please type in the name of the title you would like to add',
    }, 
    {
      type: "input",
      name: "salary",
      message: "what is the salary of the new role?"
    },
    {
      type: "list",
      name: "department",
      choices: departments,
      message: "which department is this role in?"
    },
    ]).then(function (result) {
const sql = `INSERT INTO department (title)
VALUES (?)`;
const params = [result.title];
console.log(params)
db.query(sql, params, (err, queryResult) => {
if (err) {
  console.log("Error", err);
  return;
};
console.table(queryResult);
});
viewRoles();
})};



module.exports = {
    viewEmployees, 
    viewRoles, 
    viewDepartments,
    addDepartment,
    addEmployee,
    removeEmployees,
    updateEmployeeRole,
    addRole,
};