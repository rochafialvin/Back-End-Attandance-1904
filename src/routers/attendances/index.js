const router = require("express").Router();

const getAttendancesRouter = require("./get.attendances");

router.use(getAttendancesRouter);

module.exports = router;
