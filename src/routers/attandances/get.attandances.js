const router = require("express").Router();
const pool = require("../../config/database");
router.get("/:userId", async (req, res, next) => {
  try {
    const connection = await pool.promise().getConnection();

    const sqlGetAttandances =
      "SELECT  attandances.userId, attandances.id, attandances.tanggal, attandances.checkIn, attandances.checkOut, attandances.status, users.fullName, users.email FROM attandances JOIN users ON users.id=attandances.userId WHERE userId = ?;";
    const dataGetAttendances = req.params.userId;

    const result = await connection.query(
      sqlGetAttandances,
      dataGetAttendances
    );
    connection.release();
    console.log(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
