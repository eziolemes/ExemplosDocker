const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Docker!!!");
});
app.get("/oi", (req, res) => {
  res.send("Olá Docker!!!");
});
app.get("/about", (req, res) => {
  res.send("Este é um exemplo de um app node rodando em um conteiner docker!!");
});

const port = 3000;

app.listen(port, function() {
  console.log(`Example app listening on ${port}!`);
});