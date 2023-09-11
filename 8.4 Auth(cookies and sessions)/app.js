//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; //the more many times you keep salting a hashed value, the stronger it becomes..

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/UserDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected!"))
  .catch((err) => console.log(err));

//we would need to change this to mongoose instance schema object

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

//login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ email: username })
    //now save this new user and also remember that mongo db no longer has a callback function.... you mostly try and catch
    //or we can also use the then and catch
    .then((foundUser) => {
      // console.log(data);
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result == true) {
            res.render("secrets");
            console.log("successfull authentication, you are logged in");
          }
        });
      }
    })
    .catch((err) => console.log(err));
});

//registration
app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    const newUser = new User({
      email: req.body.username,
      password: hash,
    });
    //now save this new user and also remember that mongo db no longer has a callback function.... you mostly try and catch
    //or we can also use the then and catch
    try {
      newUser.save();
      res.render("secrets");
      console.log("data has been registered correctly");
    } catch (err) {
      console.log(err);
    }
  });
});

app.listen(3019, function () {
  console.log("Server started on port 3019");
});
