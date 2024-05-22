const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

//Defining the actor model
const Actor = sequelize.define(
  "Actor",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "actors",
  }
);

module.exports = Actor;
