const { User, Todo } = require("../model");

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
    const allUser = await User.findAll({
      include: [{model:Todo}],
    });
    res.json(allUser);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getSingleUser = async (req, res) => {
 
try {
  const user = await User.findByPk(req.params.id);
  if(!user){
    res.status(404).json({message: 'No user with this id'});
    return;
  }
  res.json(user);
} catch (err) {
  res.status(500).json({err})
}
};
module.exports = { createUser, getAllUsers, getSingleUser };
