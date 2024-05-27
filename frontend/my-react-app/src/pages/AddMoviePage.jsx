import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../api";
import "../styles/AddMovie.css";
import Modal from "../components/Modal";

const AddMoviePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    genre: "",
    actors: "",
    description: "",
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addMovie(formData);
      setShowModal(true);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // Navigate to the home page after closing the modal
  };

  return (
    <div className="addMovie">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Release Year:
          <input
            type="text"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Actors:
          <input
            type="text"
            name="actors"
            value={formData.actors}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="2"
            required
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h3>Movie Added Successfully!</h3>
        <p>Your movie has been added to the list.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AddMoviePage;
