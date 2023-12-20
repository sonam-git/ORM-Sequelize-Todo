const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid");

const sequelize = require("../config/connection");

class User extends Model {
  // holds the instance methods
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init(
  // define columns on model
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // link to db connection and configuration settings for how to create this table
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: true,
    modelName: "user",
    freezeTableName: true,
  }
);
module.exports = User;
