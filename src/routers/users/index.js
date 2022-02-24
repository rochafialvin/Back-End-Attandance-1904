const express = require("express");
const router = express.Router();


const postUserRouter = require("./post.user")



  // Post User
router.use(postUserRouter)



module.exports = router;