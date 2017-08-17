const express = require('express')
const app = express()

app.get('/', function(req,res)
{
    res.send('<h1>First message from Express');
    console.log('Request processed');
});

app.listen(7999, function()
{
    console.log('Express started');
});