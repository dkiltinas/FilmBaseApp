import axios from "axios";

const API_URL = "http://localhost:3000";

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
    await axios.delete(`${API_URL}/movies${id}`);
  } catch (error) {
    console.error("Error deleting movie: ", error);
    throw error;
  }
};
