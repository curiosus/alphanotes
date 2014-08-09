/**
 * Created by erudite on 7/29/14.
 */


var index = function(req, res) {
    console.log('heeeey');
    res.send('Index Home Page');
};

exports.index = index;