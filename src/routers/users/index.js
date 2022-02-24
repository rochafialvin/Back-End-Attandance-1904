const express = require("express");
const router = express.Router();


const postUserRouter = require("./post.user")

const getUserRouter = require("./get.user")



  // Post User
router.use(postUserRouter)

//Get User
router.use(getUserRouter)



module.exports = router;