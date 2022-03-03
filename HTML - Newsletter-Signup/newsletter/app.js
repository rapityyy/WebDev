//////////////////// START CONNECTION
//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
////////////////////////////////////

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  // Mailchimp API = 3ed34bc4d2c74af3d37bbedd232d36b7-us14
  const data = {
    members: [
      {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      }
    }
  ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us14.mailchimp.com/3.0/lists/f7f1304505";

  const options= {
    method: "POST",
    auth: "anhle1:3ed34bc4d2c74af3d37bbedd232d36b7-us14",
  }

  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      // console.log(JSON.parse(data));
      console.log(typeof(data) );
    })
  });

  request.write(jsonData);
  request.end();


});

// app.post("/bmicalculator", function(req, res){
//   var w = parseFloat(req.body.w);
//   var h = parseFloat(req.body.h);
//
//   var bmi = w / (w*h);
//
//   console.log("Your BMI is " + bmi);
//   res.send("Your BMI is " + bmi);
// });

app.listen(3000, function() {
  console.log("Server is running at 3000");
});

// f7f1304505
