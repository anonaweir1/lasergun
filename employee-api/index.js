const express = require('express');
const app = express();
const db = require('./db.js');
const loginDetails = {name: 'hr', password: 'hrPassword'};

app.get('/employees', function(req, res)
{
    res.send(employees);
});

app.post('/test-page', function(req, res) 
{
    console.log(req.body);
    res.send(loginDetails);
    db.login(loginDetails.name, loginDetails.password);
});

app.listen(8002, function()
{
    console.log('Employee api listening on port 8002...');
});