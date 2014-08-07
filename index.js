var express = require('express');
var main = require('./routes/main.js');
var addnote = require('./routes/addnote.js');
var getnote = require('./routes/getnote.js');

var app = express();
var notes = [];

app.configure( function () {
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.logger('dev'));
    app.use(express.favicon());
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
});



app.get('/', function (req, res) {
    res.render('main');
});


app.post('/addnote', addnote.index);

app.get('/getnote/:id', getnote.index);



app.listen(6900);








//app.get('/note/random', function (req, res) {
//  var id = Math.floor(Math.random() * notes.length);
//  var n = notes[id];
//  res.json(n);
//});
//
//app.get('/note/:id', function (req, res) {
//  if (notes.length <= req.params.id || req.params.id < 0) {
//    res.statusCode = 404;
//    return res.send('Error 404: No note found');
//  } else {
//    var n = notes[req.params.id];
//    res.json(n);
//  }
//});
//
//app.post('/addnote', function (req, res) {
//  if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('age')) {
//    var newNote = {
//      name : req.body.name,
//      age : req.body.age
//    };
//    notes.push(newNote);
//    res.json(true);
//  } else {
//    res.statusCode = 400;
//    return res.send('Error 400: Post syntax incorrect.');
//  }
//});

