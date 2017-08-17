const express = require('express');
const app = express();
const db = require('./db.js');

app.get('/employees', function(req, res)
{
    res.send(employees);
});

app.listen(8002, function()
{
    console.log('Employee api listening on port 8002...');
})