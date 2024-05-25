const express = require("express");
const movieRoutes = require("./controllers/movieController");
const sequelize = require("./dbConfig");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Server start

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
