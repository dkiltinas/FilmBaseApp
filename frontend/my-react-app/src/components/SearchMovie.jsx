import { useState } from "react";

const SearchMovie = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onSearch function passed from the parent component
    onSearch({ title, date, genre });
  };

  return (
    <div className="search-movie">
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Release Date:</label>
        <input
          type="number"
          value={date}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="submit">See The Base</button>
      </form>
    </div>
  );
};

export default SearchMovie;
