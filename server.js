
var isDev = process.env.NODE_ENV === "development";
if (isDev) {
  require('dotenv').config();
};
const express = require("express");
const path = require('path');
const db = require(path.join(__dirname + "/models"));

const jwt = require('express-jwt');
const mongoose = require("mongoose");
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// API routes
app.use("/api/user", require("./routes/api"));
app.use("api/validateuser", jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
}));
app.get("/api/validateuser", function (req, res) {
  res.json({
    message: "logged in successfully!"
  });
});


// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/accountabilityApp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  )
});