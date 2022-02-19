
//jshint esversion:6

const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");


const app = express();
app.use(bodyParser.urlencoded({
   extended: true
}));

// app.get("/bmicalculator", function(req, res){
//   res.sendFile(__dirname + "/bmiCalculator.html");
// });
//
// app.post("/bmicalculator", function(req, res){
//   var w = parseFloat(req.body.w);
//   var h = parseFloat(req.body.h);
//
//   var bmi = w / (w*h);
//
//   console.log("Your BMI is " + bmi);
//   res.send("Your BMI is " + bmi);
// });

app.listen(3000, function(){
  console.log("Server is running at 3000");
});
