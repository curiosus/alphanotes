var notesDb = [];
var id_inc = 0;

exports.listNotes = function () {
    return notesDb;
};

exports.addnote = function (text, title) {
   id_inc = id_inc + 1;
   var entryDate = new Date();
   var note = {
       id: id_inc,
       text: text,
       title: title,
       date: entryDate
   };
   notesDb.push(note);
};

