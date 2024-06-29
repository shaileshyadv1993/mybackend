require("dotenv").config();
const express = require("express");

const app = express();

// GET request
app.get("/", (req, res) => {
  res.send("Hello! World");
});

app.get("/twitter", (req, res) => {
  res.send("Shailesh Yadav");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is Login-In page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Youtube</h1>");
});

// Server Listining
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});