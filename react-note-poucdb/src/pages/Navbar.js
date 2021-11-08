import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <h1 className="navbar-brand">
                    <Link to="/">ReactNote</Link>
                </h1>
                <Link to="/new" className="btn btn-primary">New Note</Link>
                    
            </nav>
        );
    }
}

export default Navbar;