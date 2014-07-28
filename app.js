var express = require('express');
var app = express();
var notes = [];

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/note/random', function (req, res) {
  var id = Math.floor(Math.random() * notes.length);
  var n = notes[id];
  res.json(n);
});

app.get('/note/:id', function (req, res) {
  if (notes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No note found');
  } else {
    var n = notes[req.params.id];
    res.json(n);
  }
});

app.post('/addnote', function (req, res) {
  if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('age')) {
    var newNote = {
      name : req.body.name,
      age : req.body.age
    };
    notes.push(newNote);
    res.json(true);
  } else {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }
});

app.listen(6900);
