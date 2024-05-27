const MovieItem = ({ movie, onDelete, onEdit }) => {
  const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f5c518",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#711c1a",
    marginLeft: "40px",
  };

  // Function to format release date to display only the year
  const formatReleaseYear = (dateString) => {
    const year = new Date(dateString).getFullYear();
    return year;
  };

  return (
    <div
      className="movieItem"
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "30px",
        borderRadius: "5px",
        backgroundColor: "#fff",
      }}
    >
      <h3>{movie.title}</h3>
      <p>
        <span style={{ fontWeight: "bold" }}>Release Year:</span>{" "}
        {formatReleaseYear(movie.releaseDate)}
      </p>{" "}
      <p>
        <span style={{ fontWeight: "bold" }}>Genre:</span> {movie.genre}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Actors:</span> {movie.actors}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
        {movie.description}
      </p>
      <div
        style={{
          display: "flex",
        }}
      >
        <button style={editButtonStyle} onClick={() => onEdit(movie)}>
          Edit
        </button>
        <button style={deleteButtonStyle} onClick={() => onDelete(movie.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
