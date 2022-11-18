const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Docker!!!");
});
app.get("/oi", (req, res) => {
  res.send("Olá Docker!!!");
});

app.listen(3000);