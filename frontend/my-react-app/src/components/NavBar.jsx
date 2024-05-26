import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          MovieBase
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/add-movie" className="nav-link">
            Add New Movie
          </Link>
        </li>
        <li className="nav-item">
          <Link to="movies/search" className="nav-link">
            Search Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
