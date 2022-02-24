const {mysql2} = require("../../config/database")
const router = require("express").Router();
const validator = require("validator");
const bcrypt = require("bcryptjs");



//Create user


const postUserRouter =  async (req, res, next) => {

   

    try {
        const connection = await mysql2.promise().getConnection();

        // const connection = await mysql2.createConnection();

        const sql = "INSERT INTO users SET ?";

        const data = req.body

        const isEmail = validator.isEmail(data.email)
        if(!isEmail) return res.status(401).send({message : "Format Email Salah"});

        data.password = bcrypt.hashSync(data.password);

        try {
            await connection.query(sql, data, () => {

                res.status(201).send({
                    message: `Data dengan username : ${req.body.username} berhasil ditambahkan`,
                });
            })
            
        } catch (error) {
            next(error)
        }
           
    } catch (error) {

        next(error);
    }
};


router.post("/", postUserRouter)

module.exports = router