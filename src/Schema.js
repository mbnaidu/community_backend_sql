var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'madhu123'
});

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'madhu123'
});

connection.connect(function(err) {
    if(!err) {
        console.log("connection successful")
        connection.query("CREATE DATABASE IF NOT EXISTS community", function (err, result) {
            if(!err) {
                console.log("Database created");
                connection.end();
                connection = mysql.createConnection({
                    host     : '127.0.0.1',
                    user     : 'root',
                    password : 'madhu123',
                    database: "community"
                });
                connection.connect(function(err) {
                    if (err) {console.log(err);}
                    else {console.log("DB Connected!");}
                    var sql = "CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR(50), password VARCHAR(50))";
                    connection.query(sql, function (err, result) {
                        if(!err) {console.log("User table created");}
                        else {console.log(err);}
                    });
                    sql = "CREATE TABLE IF NOT EXISTS members (rationId VARCHAR(20), name VARCHAR(50), aadharNumber VARCHAR(50) PRIMARY KEY, gender VARCHAR(1), age int, phone VARCHAR(12), address VARCHAR(200))";
                    connection.query(sql, function (err, result) {
                        if(!err) {console.log("members table created");}
                        else {console.log(err);}
                    });
                });
            }
            else {console.log(err);}
          });
    } else {
        throw err;
    }
});