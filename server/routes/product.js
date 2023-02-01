const express = require("express");
const router = express.Router();
const upload = require("../middleware/fileUpload");
const {
  getProducts,
  addProduct,
  getProductById,
  getProductsByCategory,
} = require("../controllers/product");

//Read
router.get("/", getProducts);
router.get("/:id", getProductById);

//create,update
router.post("/add", upload.single("productPic1"), addProduct);
// router.post('/:id', updateProduct);

// delete

module.exports = router;
