const pool = require('../config/database');

const getStudentsAttandace = async () => {
  const connection = await pool.promise().getConnection();

  const sqlGetStudents =
    'SELECT users.nis, users.fullName, users.email, users.phone, sessions.name AS session, attandances.createdAt FROM users LEFT JOIN sessions ON users.id = sessions.id LEFT JOIN attandances ON users.id = attandances.userId;';

  const [result] = await connection.query(sqlGetStudents);

  connection.release();
  return result;
};

module.exports = { getStudentsAttandace };
