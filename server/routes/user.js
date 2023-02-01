const express = require("express");
// fetch functions from controllers
const router = express.Router();

const { addUser } = require("../controllers/user");

//create,update
router.post("/add", addUser);

// delete

module.exports = router;
