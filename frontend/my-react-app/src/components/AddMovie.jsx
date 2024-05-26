import { useState } from "react";
import { addMovie } from "../api";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [actors, setActors] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMovie({ title, releaseDate, genre, actors, description });
      // Clear form fields after successfully adding the movie
      setTitle("");
      setReleaseDate("");
      setGenre("");
      setActors("");
      setDescription("");
    } catch (error) {
      console.error("Error adding movie:", error);
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
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
