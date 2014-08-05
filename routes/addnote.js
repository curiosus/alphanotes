exports.index = function (req, res) {
  res.render('addnote/index', {noteentry: req.param('noteentry')});
};
