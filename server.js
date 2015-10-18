// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),					//same as var app = express();
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// ROUTES //
app.get('/', function (req, res){
  // render index.html and send with foods data filled in
  res.send('working!');
});


app.listen(3000, function (){
  console.log("listening on port 3000");
});