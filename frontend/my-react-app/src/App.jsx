import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddMoviePage from "./pages/AddMoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import SearchMoviesPage from "./pages/SearchMoviesPage";

import "./styles/App.css";

// Setup routes

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="/movies/edit/:id" element={<EditMoviePage />} />
          <Route path="/movies/search" element={<SearchMoviesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
