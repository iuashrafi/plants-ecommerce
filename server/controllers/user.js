const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// User registeration
const addUser = async (req, res) => {
  try {
    const {
      fname: firstName,
      lname: lastName,
      email,
      password: pwd,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(pwd, salt);

    const user = new User({ firstName, lastName, email, password });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  addUser,
};
