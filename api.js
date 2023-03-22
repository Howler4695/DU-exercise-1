const express = require("express");
const app = express();
const port = 3000;

const homeDir = ["/", "/home"];
app.get(homeDir, (req, res) => {
  res.send("Hello World!");
});

app.get("/random", (req, res) => {
  res.send("lmao");
});

app.get("*", (req, res) => {
  res.send("doesn't exist");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
