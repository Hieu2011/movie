import React, { Component } from 'react';

class Result extends Component {
    SetStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize

        }
    }
    render() {
        return (
            <div className="col-xs|sm|md|lg|xl-12">
                <p>Color: {this.props.color} - Font size : {this.props.fontSize}px</p>
                <div className="Content-corlor" style={this.SetStyle()}>
                  Nội dung
                </div>
            </div>
        );
    }
}

export default Result;