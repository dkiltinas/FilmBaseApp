const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

//Defining the movie model
const Movie = sequelize.define(
  "Movie",
  {
    //Column: title
    title: {
      type: DataTypes.STRING,
      allowNull: false, //Require title (can't be null)
    },
    //Column: releaseDate
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false, //Require release date
    },
    //Column: genre
    genre: {
      type: DataTypes.STRING,
      allowNull: false, //Require genre
    },
    actors: {
      type: DataTypes.STRING, // Can be adjusted if you want to use another data type
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    tableName: "movies", //Table name in the database
  }
);

module.exports = Movie;
