var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();
var port = 3000; 

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var waitlist = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/api/table", function(req, res) {
    return res.json(reservations)
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist)
});

app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  reservations.push(newReservation);
  res.json(newReservation);
});



app.listen(port);
