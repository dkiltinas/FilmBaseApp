import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddMoviePage from "./pages/AddMoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import SearchMoviesPage from "./pages/SearchMoviesPage";
// Setup routes
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/add-movie" component={AddMoviePage} />
          <Route path="/edit-movie/:id" component={EditMoviePage} />
          <Route path="/search-movies" component={SearchMoviesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
