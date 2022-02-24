const express = require('express');
const router = express.Router();

const postLoginUserRouter = require('./post.user')

router.use(postLoginUserRouter)

module.exports = router;
