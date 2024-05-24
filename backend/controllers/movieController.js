const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Movie = require("../models/movie");

// Route handler for getting all movies
router.get("/", async (req, res) => {
  try {
    // Sending the response with the list of movies
    const movies = await Movie.findAll();
    res.status(200).json({
      message: "List of movies",
      movies: movies,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
});

// Route handler for creating a new movie
router.post("/", async (req, res) => {
  try {
    const { title, releaseDate, genre, actors, description } = req.body;

    const newMovie = await Movie.create({
      title,
      releaseDate,
      genre,
      actors,
      description,
    });
    res.status(201).json({
      message: "Movie created successfully",
      movie: newMovie,
    });
  } catch (error) {
    console.error("Error creating a movie:", error);
  }
});

// Route handler for updating the movie
router.put("/:id", async (req, res) => {
  const movieId = req.params.id;
  const { title, releaseDate, genre, actors, description } = req.body;

  try {
    //check if the movie exists
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.json({
        message: "Movie not found",
      });
    }

    //Updating with the new data
    await movie.update({ title, releaseDate, genre, actors, description });

    res.status(200).json({
      message: "Movie updated successfully",
    });
  } catch (error) {
    console.error("Error updating the movie:", error);
  }
});

// Route handler for deleting a movie
router.delete("/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    // Check if the movie exists
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    // Delete the movie
    await movie.destroy();

    res.status(200).json({
      message: "Movie deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting the movie:", error);
  }
});

// Handler for searching movies
router.get("/search", async (req, res) => {
  try {
    // Search by theese parameters
    const { title, date, genre } = req.query;

    const searchConditions = {};
    if (title) {
      searchConditions.title = { [Op.like]: `%${title}%` }; //Op.like is the key in the object in this case. //  % is a wildcard in SQL
    }
    if (date) {
      searchConditions.releaseDate = date;
    }
    if (genre) {
      searchConditions.genre = genre;
    }
    // Searching
    const movies = await Movie.findAll({ where: searchConditions });

    res.status(200).json({
      message: "Search results",
      movies: movies,
    });
  } catch (error) {
    console.error("Error searching movies", error);
  }
});

module.exports = router;
