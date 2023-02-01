const express = require("express");
const router = express.Router();

const { getCategory, addCategory } = require("../controllers/category");

router.post("/add", addCategory);
router.get("/", getCategory);
module.exports = router;
