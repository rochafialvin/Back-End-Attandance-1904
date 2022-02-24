require('dotenv').config();
const mysql = require('mysql2');

const { DB_USER, DB_NAME, DB_PASS } = proces.env;

const pool = mysql.createPool({
  host: 'localhost',
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 100,
});

module.exports = { pool };
