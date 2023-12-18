const { User } = require("../model");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.findAll();
    res.json(allUser);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getSingleUser = async (req, res) => {
  const { userId } = req.params.id;
  const user = await User.findOne(userId);
  res.json(user);
};
module.exports = { createUser, getAllUsers, getSingleUser };
