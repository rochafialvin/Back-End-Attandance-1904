require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.API_PORT;
const pool = require('./src/config/database/index')

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("API IS RUNNING");
});

// Login user
app.post("/users/login", async (req, res) => {
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
    res.status(500).send({ error })
  }
})

app.use((error, req, res, next) => {
  res.status(500).send({
    status: "ERROR",
    message: error.message,
    data: error,
  });
});

app.listen(port, (err) => {
  if (err) return cosole.log({ err });

  console.log(`Api is running at port ${port}`);
});
