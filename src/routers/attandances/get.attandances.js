const router = require("express").Router();
const pool = require("../../config/database");
router.get("/", async (req, res, next) => {
  try {
    const connection = await pool.promise().getConnection();

    const sqlGetAttandances = "SELECT * FROM attandances WHERE userId = ?;";
    const dataGetAttendances = req.body.userId;

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
