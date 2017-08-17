const mysql = require('mysql');
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

exports.login  = function(pUsername, pPassword)
{
    var connectCode = 0;
    
    const db = mysql.createConnection({
        host: 'localhost',
        user: pUsername,
        password: pPassword,
        database: 'lasergun'
    });
        
    db.connect(function(err)
    {
        if(err)
        {
            connectCode=1;
            console.log("sorry, try again");
        }
        else
        {
            connectCode=true;
            console.log("Connected to MySQL");            
        }
    });
    return JSON.stringify(connectCode);
}
