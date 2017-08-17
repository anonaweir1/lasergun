const mysql = require('mysql');
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/test-page', function(req, res) 
{
    //this.name = req.name;
    //this.password = req.password;
});

exports.login  = function(pUsername, pPassword)
{
    const db = mysql.createConnection({
        host: 'localhost',
        user: pUsername,
        password: pPassword,
        database: 'lasergun'
    });
        
    db.connect(function(err)
    {
        if(err) throw err;
        console.log("Connected to MySQL");
    });
}
