import { useState } from "react";
import SearchMovie from "../components/SearchMovie";
import MovieItem from "../components/MovieItem";
import { deleteMovie, searchMovies } from "../api";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import "../styles/SearchMovies.css";

const SearchMoviesPage = () => {
  // State variables
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPostDeleteModal, setShowPostDeleteModal] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);
  const navigate = useNavigate();

  // Function to handle movie search
  const handleSearch = async (searchParams) => {
    try {
      // Call the searchMovies function from the API to fetch search results
      const results = await searchMovies(searchParams);
      // Update state with search results
      setSearchResults(results);
      // Set search status to true
      setHasSearched(true);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleDelete = async () => {
    try {
      // Call the deleteMovie function from the API with the ID of the movie to delete
      await deleteMovie(movieToDelete.id);
      // Update search results to remove the deleted movie
      setSearchResults(
        searchResults.filter((movie) => movie.id !== movieToDelete.id)
      );
      // Close delete modal
      setShowDeleteModal(false);
      // Reset movieToDelete state
      setMovieToDelete(null);
      // Show post-delete modal
      setShowPostDeleteModal(true);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  // Function to confirm delete and show delete modal
  const confirmDelete = (movie) => {
    // Set the movie to delete
    setMovieToDelete(movie);
    // Show the delete modal
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    // Close the delete modal
    setShowDeleteModal(false);
    // Reset movieToDelete state
    setMovieToDelete(null);
  };

  const handleClosePostDeleteModal = () => {
    // Close the post-delete modal
    setShowPostDeleteModal(false);
  };

  // Function to navigate to the edit movie page
  const handleEdit = (movie) => {
    // Navigate to the edit movie page with the movie's ID
    navigate(`/movies/edit/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="searchMovies">
      <SearchMovie onSearch={handleSearch} />

      {hasSearched && searchResults.length === 0 && (
        <p style={{ color: "white" }}>No results found.</p>
      )}
      {searchResults.length > 0 && (
        <div className="movie-list">
          {searchResults.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onDelete={() => confirmDelete(movie)} // onDelete callback for confirming deletion
              onEdit={() => handleEdit(movie)} // onEdit callback for editing movie
            />
          ))}
        </div>
      )}

      <Modal show={showDeleteModal} handleClose={handleCloseDeleteModal}>
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this movie?</p>
        <button onClick={handleDelete}>Yes, delete</button>
        <button onClick={handleCloseDeleteModal}>Cancel</button>
      </Modal>

      <Modal
        show={showPostDeleteModal}
        handleClose={handleClosePostDeleteModal}
      >
        <h3>Movie Deleted</h3>
        <p>The movie has been successfully deleted.</p>
        <button onClick={handleClosePostDeleteModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SearchMoviesPage;
