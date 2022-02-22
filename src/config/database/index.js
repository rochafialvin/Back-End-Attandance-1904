require("dotenv").config();
const mysql = require("mysql2");

const { DB_USER, DB_NAME, DB_PASS } = proces.env;

const mysql2 = mysql.createConnection({
  host: "localhost",
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

module.exports = { mysql2 };