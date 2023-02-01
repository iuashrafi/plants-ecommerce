const Category = require("../models/Category");
// Get list of all the Categories
const getCategory = async (req, res) => {
  try {
    let categ = await Category.find().select("name");

    categ = categ.map((item) => {
      return {
        name: item.name,
        value: item._id,
      };
    });

    res.status(200).json(categ);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
// Add a new category for a product
const addCategory = async (req, res) => {
  try {
    const categ = new Category(req.body);
    await categ.save();
    res.status(200).json(categ);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getCategory,
  addCategory,
};
