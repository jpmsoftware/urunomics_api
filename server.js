const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});

app.use(cors());

app.get("/", (req, res) => {
  // Returns index file
  var indexFile = require("./index.json");
  res.json(indexFile);
});

app.get("/:category/:indicator", (req, res) => {
  try {
    var dataset = require(`./data${req.url}.json`);
    res.json(dataset);
  } catch (err) {
    res.end(err);
  }
});