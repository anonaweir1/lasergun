const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'lasergun'
});

db.connect(function(err)
{
    if(err) throw err;
    console.log("Connected to MySQL");
});

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