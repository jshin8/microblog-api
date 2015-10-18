// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),					//same as var app = express();
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs'); 
// serve js & css files
app.use(express.static('public'));   

// ROUTES //
app.get('/', function (req, res){
  res.render('index');
});


app.listen(3000, function (){
  console.log("listening on port 3000");
});