const mysql = rerquire('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'world'
});

db.connect(function(err)
{
    if(err) throw err;
    console,.log("Connected to MySQL");
});