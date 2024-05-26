import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text">
        <h2>Welcome to MovieBase</h2>
      </div>
      <div className="content">
        <Link to="/add-movie" className="button">
          Add New Movie
        </Link>
        <Link to="/movies/search" className="button">
          Search Movies
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
