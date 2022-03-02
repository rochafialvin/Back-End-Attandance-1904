const router = require("express").Router();
const pool = require("../../config/database");

const postLoginUser = async (req, res, next) => {
    try {
        const connection = await pool.promise().getConnection();
    	await connection.beginTransaction();

        try {
            const connection = await pool.promise().getConnection();
            const {nis, password} = req.body
        
            const sqlLoginUser = 'SELECT id, nis FROM users WHERE nis = ?;';
            const sqlDataUSer = nis;
        
            const result = await connection.query(sqlLoginUser, sqlDataUSer)
            connection.release();
        
            const user = result[0]
        
            res.status(200).send({ user });

          } catch (error) {
            next(error)
          }
    } catch (error) {
      next (error)
    };
};

router.post("/login", postLoginUser);

module.exports = router;