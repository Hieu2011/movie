import PouchDB from 'pouchdb';

export default class DB {
    constructor(name) {
        this.db = new PouchDB(name);
    }
    async getAllNotes(){
        let allNote = await this.db.allDocs({include_docs: true, descending: true});
        let notes = {}
        allNote.rows.forEach(element => {
            notes[element.id] = element.doc

        });
        return notes;
    }
    async createNote(note){
        note.createAt = new Date();
        note.updateAt = new Date();
        const res = await this.db.post(note, function callback(err, result) {
            if (!err) {
              console.log('Successfully posted a note!');
            }
          });
        return res;
    }
    
}