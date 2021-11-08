import React, { Component } from 'react';
import NoteList from '../components/NoteList';

class Home extends Component {

    render() {
        var {notes} = this.props;
        return (
            <div>
                <h1>Note</h1>
                <NoteList notes = {notes} />

            </div>
        );
    }
}

export default Home;