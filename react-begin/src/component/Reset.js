import React, { Component } from 'react';

class Reset extends Component {
    onReset = () =>{
        console.log('a');
        this.props.onReset(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-outline-primary m-3" onClick={this.onReset}>Reset</button>

        );
    }
}

export default Reset;