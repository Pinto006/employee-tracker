const mysql = require('mysql2');
require('dotenv').config();
const cTable = require('console.table');
const inquirer = require('inquirer');
const init = require('./index.js');

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

  // async function main() {
  //   // get the client
  //   const mysql = require('mysql2/promise');
  //   // create the connection
  //   const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
  //   // query database
  //   const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
  // }

async function viewEmployees () {
    const sql = `SELECT *  FROM employee`;
    db.query(sql, (err, result) => {
    if (err) {
        console.log(err)
      return;
    }
    console.table(result);
    init();
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