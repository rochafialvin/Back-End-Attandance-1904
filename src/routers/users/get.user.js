const router = require("express").Router();
const {mysql2} = require("../../config/database");

const getUserRouter =  async (req, res, next) => {
    try {
        const connection = await mysql2.promise().getConnection()
  
      const sqlGetAllUser = "select id, fullName, email, phone from users;";
  
      // result : berisi array of data untuk query SELECT , untuk lainnya akan berisi object
      // fields
      const result = await connection.query(sqlGetAllUser);
      connection.release();
  
      res.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };

  router.get("/", getUserRouter)

  module.exports = router;