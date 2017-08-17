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
});