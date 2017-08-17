const mysql = require('mysql');
const express = require('express');
const app = express();

app.post('/test-page', function(req, res) 
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
