const express =  require('express');
var mysql = require('mysql');
const router = express();

var dbPool = mysql.createPool({
    connectionLimit: 10,
    host     : '127.0.0.1',
    user     : 'root',
    password : 'madhu123',
    database: "community"
});


exports.addMember = function(handlers) {
    //console.log(handlers)
    var post  = {
        name:handlers.name,
        rationId: handlers.rationId,
        aadharNumber: handlers.aadharNumber,
        gender: handlers.gender,
        age: handlers.age,
        phone: handlers.phone,
        address: handlers.address,
    };
    dbPool.query('INSERT INTO members SET ?', post, function(err, result) {
        if(!err) {
            console.log(result);
            handlers.success(result);
        } else {
            console.log(err);
            handlers.error(err);
        }               
    });
};

exports.getMembers = function(handlers) {
    var query = 'SELECT * from members WHERE rationId = '+handlers.searchText+' OR phone = '+handlers.searchText+' OR aadharNumber = '+ handlers.searchText;
    console.log(query);
    dbPool.query(query, function(err, result) {
        if(!err) {
            console.log(result);
            handlers.success(result);
        } else {
            console.log(err);
            handlers.error(err);
        }
        
      });
}

exports.getAllMembers = function(handlers) {
    var query = 'SELECT * from members';
    dbPool.query(query, function(err, result) {
        if(!err) {
            console.log(result);
            handlers.success(result);
        } else {
            console.log(err);
            handlers.error(err);
        }
        
      });
}