const router = require("express").Router();

const getAttandancesRouter = require("./get.attandances");

router.use(getAttandancesRouter);

module.exports = router;
