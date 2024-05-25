const MovieItem = ({ movie, onDelete, onEdit }) => {
  return (
    <div className="movieItem">
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <p>{movie.genre}</p>
      <p>{movie.actors}</p>
      <p>{movie.description}</p>
      <button onClick={() => onEdit(movie)}>Edit</button>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  );
};

export default MovieItem;
