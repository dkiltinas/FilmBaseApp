const express = require("express");
const movieRoutes = require("./controllers/movieController");
const sequelize = require("./dbConfig");

const app = express();
const PORT = 3000;

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

//Data base sync
(async () => {
  try {
    await sequelize.sync();
    console.log("Database sync successfull");
  } catch (error) {
    console.error("Database sync error", error);
  }
})();
