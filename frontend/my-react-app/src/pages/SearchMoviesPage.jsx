import { useState } from "react";
import SearchMovie from "../components/SearchMovie";
import MovieItem from "../components/MovieItem"; // Importing MovieItem directly here
import { deleteMovie, searchMovies } from "../api";
import { useNavigate } from "react-router-dom";

const SearchMoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (searchParams) => {
    try {
      // Call the searchMovies function from the API to fetch search results
      const results = await searchMovies(searchParams);
      setSearchResults(results);
      setHasSearched(true);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      // Update the movies state to remove the deleted movie
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handleEdit = (movie) => {
    navigate(`/movies/edit/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="search-movies-page">
      <SearchMovie onSearch={handleSearch} />
      <h2>Search Results</h2>
      {hasSearched && searchResults.length === 0 && <p>No results found.</p>}
      {searchResults.length > 0 && (
        <div className="movie-list">
          {searchResults.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onDelete={() => handleDelete(movie.id)}
              onEdit={() => handleEdit(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMoviesPage;
