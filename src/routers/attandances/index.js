const router = require('express').Router();

const { getStudentsRouter } = require('./get.attandance');

router.use(getStudentsRouter);

module.exports = router;
