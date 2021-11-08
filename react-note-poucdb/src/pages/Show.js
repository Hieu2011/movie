import React, { Component } from 'react';

class Show extends Component {
    render() {
        var {note} = this.props;
        if (!note) {
            return null;
        }
        return ( 
            <div>
                <h1>{note.title}</h1>
                <div>{note.body}</div>
            </div>
        );
    }
}

export default Show;