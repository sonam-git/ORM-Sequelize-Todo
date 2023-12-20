const { Todo, User } = require("../models");

const createTodo = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const userId = req.params.userId;

    // Check if the user with the provided ID exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newTodo = await Todo.create({ ...req.body, user_id: userId });
    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

const getTodos = async (req, res) => {
  try {
    const allTodo = await Todo.findAll();
    res.json(allTodo);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });

    if (!deletedTodo) {
      res.status(404).json({ message: "No todo with this id" });
      return;
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.update(
      { ...req.body },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );

    if (updatedTodo[0] === 0) {
      res.status(404).json({ message: "No todo with this id" });
      return;
    }

    res.json({ message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = { createTodo, getTodos, deleteTodo, updateTodo };
