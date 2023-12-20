const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const sequelize = require("../config/connection");

class User extends Model {
  // holds the instance methods
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
  // {
  //   hooks: {
  //     // to work with data before a new instance is created
  //     beforeCreate: async (newUserData) => {
  //       newUserData.email = await newUserData.email.toLowerCase().trim();
  //       return newUserData;
  //     },
  //     beforeUpdate: async (updateUserData) => {
  //       // to make all the characters lower case in an updated email
  //       updateUserData.email = await updateUserData.email.toLowerCase().trim();
  //       return updateUserData;
  //     },
  //   },
  // },
  // link to db connection and configuration settings for how to create this table
  {
    sequelize,
    timestamps: true,
    modelName: "user",
    freezeTableName: true,
  }
);
module.exports = User;
