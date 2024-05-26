import axios from "axios";

export const API_URL = "http://localhost:3000";

//Sending a request to the server to get the data from the /movies endpoint.

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data.movies;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    throw error;
  }
};

// Function to delete a movie from the database by its ID.
export const deleteMovie = async (id) => {
  try {
    await axios.delete(`${API_URL}/movies/${id}`);
  } catch (error) {
    console.error("Error deleting movie: ", error);
    throw error;
  }
};

// Add a new movie
export const addMovie = async (movie) => {
  try {
    await axios.post(`${API_URL}/movies`, movie);
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
};

// Update an existing movie
export const updateMovie = async (id, movie) => {
  try {
    await axios.put(`${API_URL}/movies/${id}`, movie);
  } catch (error) {
    console.error("Error updating movie:", error);
    throw error;
  }
};

export const searchMovies = async (searchParams) => {
  try {
    const response = await axios.get(`${API_URL}/movies/search`, {
      params: searchParams,
    });
    return response.data.movies;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};
