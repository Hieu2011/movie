import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize(size){
        this.props.onSetSize(size);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header bg">
                    <h3 className="card-title">Font Size: {this.props.fontSize}px</h3>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-success m-3" onClick={() =>this.changeSize(2)}>Tăng</button>
                    <button type="button" className="btn btn-outline-success m-3" onClick={() =>this.changeSize(-2)}>Giảm</button>
                    
                </div>
            </div>
        );
    }
}

export default SizeSetting;