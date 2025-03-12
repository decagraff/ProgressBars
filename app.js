const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});