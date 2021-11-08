import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Show from './pages/Show';
import Navbar from './pages/Navbar';
import NoteActionPage from './pages/NoteActionPage';
import DB from './db'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        db : new DB('pouchDB_test'),
        notes : {},
        loading : true
    }
  }
  async componentDidMount(){
    const notes = await this.state.db.getAllNotes();
    this.setState({
      notes,
      loading: false
    })
  }
  onSave = (note) =>{
    // let ids = Object.keys(this.state.notes);
    // const id = Math.max(...ids) + 1;
    // note['_id'] = id;
    let {id} = this.state.db.createNote(note);
    const {notes} = this.state;
    this.setState({
      notes:{
        ...notes,
        [id]:note
      }
    });
    console.log(this.state.notes);
    return id;
  }
  renderRoute(){
    if (this.state.loading) {
      return <h2>Loading....</h2>
    }
    return (
      <div className="container">
        <Route
          exact
          path='/'
          render={(props) => (
            <Home {...props} notes={this.state.notes} />
          )}
        />
        <Route
          path='/note/:id'
          render={(props) => (
            <Show {...props} note={this.state.notes[props.match.params.id]}/>
          )}
        />
        <Route
          path='/new'
          render={(props) => (
            <NoteActionPage {...props} onSave = {this.onSave}/>
          )}
        />
      </div>
          
    );
  }
  render() {
    return (
      <Router>
         <div className="">
           <Navbar />
           {this.renderRoute()}
        </div>
      </Router>
     
    );
  }
}


export default App;
