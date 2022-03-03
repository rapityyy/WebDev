//////////////////// START CONNECTION
//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));
////////////////////////////////////

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


// app.post("/", function(req, res) {
//   var firstName = req.body.fName;
//   var lastName = req.body.lName;
//   var email = req.body.email;
// }


app.listen(3000, function() {
  console.log("Server is running at 3000");
});
