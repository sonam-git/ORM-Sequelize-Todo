const User = require("./User");
const Todo = require("./Todo");

User.hasOne(Todo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Todo.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Todo };
