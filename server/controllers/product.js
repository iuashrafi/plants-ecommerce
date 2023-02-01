const Product = require("../models/Product");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const pdt = await Product.findById(req.params.id);
    res.status(200).json(pdt);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const pdts = await Product.find({ category: req.params.categoryId });
    res.status(200).json(pdts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
// CREATE - ADD PRODUCT
const addProduct = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file.path);

  // res.send("File uploaded successfully");
  // console.log(req.file);
  // console.log(req.body);

  let data = {
    name: req.body.productName,
    desc: req.body.productDesc,
    category_id: req.body.productCategory,
    price: req.body.productPrice,
    productPicture1: req.file.filename,
  };

  console.log(data);

  try {
    const pdt = new Product(data);
    await pdt.save();
    res.status(200).json(pdt);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
  addProduct,
};
