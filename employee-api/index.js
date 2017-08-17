const express = require('express');
const app = express();
const db = require('./db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/dawid', function(req, res)
{
    res.send("hello");
});

app.post('/test-page', function(req, res) 
{
    //res.send(loginDetails);
    //console.log();   
    var response = db.login(req.body.name, req.body.password);
    res.end(response); 
});

app.listen(8002, function()
{
    console.log('Employee api listening on port 8002...');
})

app.get('/employees', function (req, res) {
    console.log('Getting list of employees by dept.');
    db.getEmployeesInDepartment(req.body, function (rows){
        res.send(rows);
    });
});

app.post('/new', function(req, res){
    console.log("Adding user");
    console.log(req.body.name);
    const name = req.body.name;
    const address = req.body.address;
    const initialSalary = req.body.initialSalary;
    const nin = req.body.nin;
    const bankAccountNo = req.body.bankAccountNo;
    const sortCode = req.body.sortCode;
    const departmentID = req.body.departmentID;
    db.addEmployee(name, address, initialSalary, nin, bankAccountNo, sortCode, departmentID, function(message){
        res.send(message);
    });
});