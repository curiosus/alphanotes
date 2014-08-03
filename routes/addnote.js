var index = function (req, res) {
   console.log('this is on server');
   res.send('This is the add note function')
};
exports.index = index;
