const router = require('express').Router();

const getStudentAttandance = require('../../models/attandance.js');

router.get('/students/attandances', async (req, res, next) => {
  try {
    const result = await getStudentAttandance();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
