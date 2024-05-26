import { useState, useEffect } from "react"; //
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateMovie } from "../api";

const EditMoviePage = () => {
  const navigate = useNavigate();
  // Hook for accessing URL params
  const { id } = useParams();
  // State variable for storing movie data
  const [movie, setMovie] = useState({
    title: "",
    releaseDate: "",
    genre: "",
    actors: "",
    description: "",
  });

  useEffect(() => {
    // Effect hook to fetch movie data when the component mounts or when 'id' changes
    const fetchMovie = async () => {
      try {
        // fetch movie data from the setrver
        const response = await axios.get(`/api/movies/${id}`);
        const { title, releaseDate, genre, actors, description } =
          response.data;
        // Update the movie state with fetched data
        setMovie({ title, releaseDate, genre, actors, description });
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the updateMovie function with movie data and id
      await updateMovie(id, movie);
      // Navigate to the home page after update
      navigate("/");
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  // Function to handle changes in form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value }); // ..movie copies current input field, then setting the new value
  };

  return (
    <div>
      {}
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        {}
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={movie.title || ""} // making sure value is never undefined, otherwise getting an error
          onChange={handleChange}
        />
        <label>Release Date:</label>
        <input
          type="text"
          name="releaseDate"
          value={movie.releaseDate || ""}
          onChange={handleChange}
        />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={movie.genre || ""}
          onChange={handleChange}
        />
        <label>Actors:</label>
        <input
          type="text"
          name="actors"
          value={movie.actors || ""}
          onChange={handleChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={movie.description || ""}
          onChange={handleChange}
        />
        <button type="submit">Update Movie</button> {}
      </form>
    </div>
  );
};

export default EditMoviePage;
