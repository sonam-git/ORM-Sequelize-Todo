const User = require("./User");
const Todo = require("./Todo");

User.hasMany(Todo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",  // if we delete user, delete all their todos as well
});

Todo.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Todo };
