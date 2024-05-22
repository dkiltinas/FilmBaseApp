const express = require("express");
const router = express.Router();

const movies = [
  { title: "Movie 1", releaseDate: "2022-01-01", genre: "Action" },
  { title: "Movie 2", releaseDate: "2022-02-01", genre: "Comedy" },
  { title: "Movie 3", releaseDate: "2022-03-01", genre: "Drama" },
];

// Route handler for getting all movies
router.get("/", async (req, res) => {
  try {
    // Sending the response with the list of movies
    res.status(200).json({
      message: "List of movies",
      movies: movies,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
});

module.exports = router;
