const { Model, DataTypes} = require("sequelize");
const { v4: uuidv4 } = require('uuid');

const sequelize = require("../config/connection");

class User extends Model {}
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // no duplicate allowed
        validate : {
            isEmail: true  // check if the email you enter is in email format
        }
    }
  },
  // link to db connection and configuration settings for how to create this table
  {
   sequelize,
    timestamps: true,
    modelName: 'user',
    freezeTableName: true
  }
);
module.exports = User;
