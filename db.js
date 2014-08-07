var notesDb = {};
var id_inc = 0;

exports.listNotes = function () {
    return notesDb;
};

exports.addNote = function (note) {
    id_inc = id_inc + 1;
    note.id = id_inc;
    notesDb[note.id] = note;


};


exports.addnote = function (text, title) {
   var note = {
       text: text,
       title: title
   };
   notes.push(note);
};

exports.getNotes = function () {
    return notes;
}
