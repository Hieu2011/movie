import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteList extends Component {
    renderNote(){
        var notes = Object.values(this.props.notes);
        
        console.log(notes);
        
        let emplementNote= notes.map((note,index) =>{
            return <h2 key={index}>
                    <Link to={`note/${note._id}`}>{note.title}</Link>
                   </h2>
                    
        });
        return emplementNote;
    }
    render() {
        return (
            <div>
                {this.renderNote()}
            </div>
        );
    }
}

export default NoteList;