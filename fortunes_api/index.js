const fs = require("fs");
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

app.post("fortunes", (req, res) => {
  //console.log(req.body);
});

const { message, luck_number, spirit_animal } = req.body;

const fortune_ids = fortunes.map((f) => f.id);

const fortune = {
  id: (fortunes_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1,
  message,
  lucky_number,
  spirit_animal,
};

const new_fortunes = fortunes.concat(fortunes);

fs.writeFile("./data/fortunes.json", JSON.stringify(new_fortunes), (err) =>
  console.log(err)
);
res.json(new_fortunes);

module.exports = app;
