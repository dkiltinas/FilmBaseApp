import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateMovie } from "../api";
import Modal from "../components/Modal";
import "../styles/EditMovie.css";

const EditMoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    releaseDate: "",
    genre: "",
    actors: "",
    description: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        const { title, releaseDate, genre, actors, description } =
          response.data;
        setMovie({ title, releaseDate, genre, actors, description });
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateMovie(id, movie);
      setShowModal(true);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="editMovie">
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>

        <input
          type="text"
          name="title"
          value={movie.title || ""}
          onChange={handleChange}
          placeholder="Enter new title"
        />
        <label>Release Date:</label>
        <input
          type="text"
          name="releaseDate"
          value={movie.releaseDate || ""}
          onChange={handleChange}
          placeholder="Enter new release date"
        />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={movie.genre || ""}
          onChange={handleChange}
          placeholder="Enter new genre"
        />
        <label>Actors:</label>
        <input
          type="text"
          name="actors"
          value={movie.actors || ""}
          onChange={handleChange}
          placeholder="Enter new title"
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={movie.description || ""}
          onChange={handleChange}
          placeholder="Enter new description"
        />
        <button type="submit">Update Movie</button>
      </form>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h3>Movie Updated Successfully!</h3>
        <p>Your movie has been updated.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default EditMoviePage;
