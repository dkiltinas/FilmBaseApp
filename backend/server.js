const express = require("express");

const app = express();
const PORT = 3000;

//Middleware to parse JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

//Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
