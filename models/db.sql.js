const mysql = require('mysql');
const dbConfig = require("../config/db.config");

//Creat a connection to the database server
const connection = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
});

//open MYSQL Connection
connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("Successfully connected to the database...connection.");
    }
);

module.exports = connection;