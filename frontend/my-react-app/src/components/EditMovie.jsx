import { useState } from "react";
import { updateMovie } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const EditMovie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state;

  const [title, setTitle] = useState(movie.title);
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate);
  const [genre, setGenre] = useState(movie.genre);
  const [actors, setActors] = useState(movie.actors);
  const [description, setDescription] = useState(movie.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMovie(movie.id, {
        title,
        releaseDate,
        genre,
        actors,
        description,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          placeholder="Release Date"
          required
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          required
        />
        <input
          type="text"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
          placeholder="Actors"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
