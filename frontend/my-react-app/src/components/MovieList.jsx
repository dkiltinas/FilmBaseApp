import { useEffect, useState } from "react";
import { fetchMovies, deleteMovie } from "../api";
import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // a hook to fetch movies
  useEffect(() => {
    const getMovies = async () => {
      try {
        // Call the fetchMovies function from the API and set the movies state
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []); // Empty array means the useEffect function will run only once

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      // Update the movies state to remove the deleted movie
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  // using navigate to navigate to the edit movie page with the movie's id
  const handleEdit = (movie) => {
    navigate(`/movies/edit/${movie.id}`);
  };

  return (
    // Render a list of MovieItem components
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default MovieList;
