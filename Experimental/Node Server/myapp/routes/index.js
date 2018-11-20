var express = require('express');
var app = express.Router();


/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});





module.exports = app;
