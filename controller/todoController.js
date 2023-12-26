const { Todo } = require("../models");

const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      ...req.body,
      user_id: req.session.user?.id, //req.user
    });

    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};


const deleteTodo = async (req, res) => {
  try {
    const todoData = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });

    if (!todoData) {
      res.status(404).json({ message: "No todo with this id" });
      return;
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};


module.exports = { createTodo, deleteTodo };
