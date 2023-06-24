const mysql = require('mysql2');
require('dotenv').config();
const cTable = require('console.table')
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

}; 

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