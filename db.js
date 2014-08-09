var notesDb = [];
var id_inc = 0;

exports.listNotes = function () {
    return notesDb;
};

exports.addnote = function (text, title) {
   id_inc = id_inc + 1;
   var note = {
       id: id_inc,
       text: text,
       title: title
   };
   notesDb.push(note);
};

