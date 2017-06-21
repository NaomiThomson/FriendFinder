var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();
var port = 3000; 

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/survey', function (req, res) {
   if (err) throw err;

   console.log('------------------------------------');
   console.log(data);
   console.log('------------------------------------');
})