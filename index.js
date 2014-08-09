var express = require('express');
var db = require('./db.js');
var app = express();

app.configure( function () {
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
});


app.get('/', function (req, res) {
    console.log('app.get(/) called');
    var notes = db.listNotes();
    for (var i = 0; i < notes.length; i++) {
       var n = notes[i];
       console.log('high ' + n.title);
    }
    res.render('main', {notelist: db.listNotes()});
});

app.post('/addnote', function (req, res) {
  db.addnote(req.body.noteentry, req.body.notetitle);
  res.redirect('/');
});

app.listen(6900);
