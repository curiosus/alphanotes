
exports.index = function (req, res) {
  db.addnote(req.body.noteentry, req.body.notetitle);
  res.redirect('/');
//  res.render('addnote/index', {noteentry: req.param('noteentry')});
};

