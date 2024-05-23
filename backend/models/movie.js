const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");
const Actor = require("./actor");

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
      type: DataTypes.DATE,
      allowNull: false, //Require release date
    },
    //Column: genre
    genre: {
      type: DataTypes.STRING,
      allowNull: false, //Require genre
    },
  },

  {
    tableName: "movies", //Table name in the database
  }
);

//indicates that a movie can have multiple actors, and an actor can participate in multiple movies
Actor.belongsToMany(Movie, { through: "MovieActor" });
Movie.belongsToMany(Actor, { through: "MovieActor" });

module.exports = Movie;
