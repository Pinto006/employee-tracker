const mysql = require('mysql2');
require('dotenv').config();
const cTable = require('console.table');
const inquirer = require('inquirer');
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

function viewEmployees () {
    const sql = `SELECT *  FROM employee`;
   db.query(sql, (err, result) => {
    if (err) {
        console.log(err)
      return;
    }
    console.table(result);
  });
}; 

function viewRoles () {
    const sql = `SELECT *  FROM role`;
     db.query(sql, (err, result) => {
      if (err) {
          console.log(err)
        return;
      }
      console.table(result);
    });
  }; 

function viewDepartments () {
    const sql = `SELECT *  FROM department`;
    db.query(sql, (err, result) => {
      if (err) {
          console.log(err)
        return;
      }
      console.table(result);
    });
  }; 


function addDepartment () {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'addDepartment', 
            message: 'Please type in the name of the department you would like to add?',
        }
        ]).then(function (result) {
    const sql = `INSERT INTO department (department_name)
    VALUES (?)`;
  const params = [body.department_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    };
    res.json({
      message: 'success',
      data: body
    });
    console.table(result);
  });
  viewDepartments();
})};

function addEmployee () {

};

function removeEmployees () {

}; 

function updateEmployeeRole () {

};

function addRole () {

};


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