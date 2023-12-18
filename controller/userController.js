const {User }= require("../model");

const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = { createUser };
