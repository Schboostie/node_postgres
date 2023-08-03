const express = require("express");

const fortunes = require("./data/fortunes.json");

const app = express();

app.get("/fortunes", (req, res) => {
  res.json("fortunes");
});

app.get("/fortunes/random", (req, res) => {
  console.log("requesting random fortune");

  const random_index = Math.floor(Math.random() * fortunes.length);

  const r_fortune = fortunes[random_index];

  res.json(r_fortune);
});

app.get("/fortunes/:id", (req, res) => {
  res.json(fortunes.find((f) => f.id == req.params.id));
});

module.exports = app;
