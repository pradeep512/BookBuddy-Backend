const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book.route.js");
const app = express();

// middleware
app.use(express.json()); // can send requests using Json
app.use(express.urlencoded({ extended: false })); // can send requests using Forms

// routes
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

mongoose
  .connect(
    "mongodb+srv://admin:Admin123@bookbuddybackenddb.szglj.mongodb.net/BookBuddy?retryWrites=true&w=majority&appName=bookbuddybackenddb"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
