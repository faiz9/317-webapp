const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "GSWarriors_123",
    database: "csc317db",
    connectionLimit: 50,
    debug: false,
});

module.exports = pool;