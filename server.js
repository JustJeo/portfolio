// Require Statements
const express = require("express");
const layouts = require("express-ejs-layouts")
const app = express();

// Middleware
app.set ("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + "/public"));
app.use(layouts);

// Routes
// Home
app.get("/", (req, res) => {
  res.render("home", {title: "Welcome"})
})

// About
app.get("/about", (req, res) => {
  res.render("about", {title: "About Me"})
})

// Projects
app.get("/projects", (req, res) => {
  res.render("projects", {title: "Projects"})
})

app.listen(process.env.PORT || 3000)