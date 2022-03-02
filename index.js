require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.API_PORT;

const attendancesRouter = require("./src/routers/attendances");
const userRouter = require("./src/routers/users/index");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("API IS RUNNING");
});
app.use("/attendances", attendancesRouter);

app.use("/users", userRouter);

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
