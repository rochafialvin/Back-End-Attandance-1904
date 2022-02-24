require("dotenv").config();
const mysql = require("mysql");
// const mysql2 = require('mysql2');

const { DB_USER, DB_NAME, DB_PASS } = process.env;

// const mysql2 = mysql.createPool({
//   host: "localhost",
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 50
// });

const connection = mysql.createConnection({
  host: 'localhost',
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
})

module.exports = connection;
