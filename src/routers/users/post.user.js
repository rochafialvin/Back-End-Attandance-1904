const express = require('express');
const router = express.Router();
const connection = require('../../config/database/index');

const postLoginUserRouter = router.post("/login", (req, res) => {
    const { nis, password } = req.body;

    const sql = 'SELECT id, nis FROM users WHERE nis = ?;';
    const data = nis

    connection.query(sql, data, (err, result) => {
        if (err) return res.status(500).send({ err })

        const user = result[0]

        res.status(200).send(user)

        if (!nis) return res.status(404).send("User not found")
    });
});

module.exports = postLoginUserRouter;