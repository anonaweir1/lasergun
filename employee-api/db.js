const mysql = require('mysql');
const express = require('express');
const app = express();
var db;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

exports.login  = function(pUsername, pPassword)
{            
    db = mysql.createConnection({
        host: 'localhost',
        user: pUsername,
        password: pPassword,
        database: 'lasergun'
    });

    db.connect(function (err) 
    {        
        if (err) 
        {
            console.log("Incorrect credentials");             
            return false; 
        }
        else
        {
            console.log("connected"); 
            return true;
        }
    });

    return JSON.stringify({"authGood":true});
}

exports.addEmployee = function (name, address, intialSalary, nin, bankAccoutNo, sortCode, departmentID, callback){
    db.query(
        "INSERT INTO employee (name, address, initialSalary, nin, bankAccountNo, sortCode, departmentID) VALUES (?, ?, ?, ?, ?, ?, ?);",
        [name, address, intialSalary, nin, bankAccoutNo, sortCode, departmentID],
        function (err, rows) {
            if(err) throw err;
            callback ('success');
        });
};

exports.getEmployeesInDepartment = function (emp, callback){
    db.query(
        "SELECT * FROM employee",
        function (err, rows) {
            if(err) throw err;
            callback ('success');
        });
};