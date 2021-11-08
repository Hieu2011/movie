import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : [
                'red','blue','yellow','green','black','white'
            ]
        }
    }
    showColor(color){
        console.log(this.props.color);
        return {
            backgroundColor : color
        }
    }
    setActiveColor(color){
        this.props.onReciveColor(color);
    }
    render() {
        var emplements = this.state.colors.map((color,index) =>{
            return <span 
                    key={index} 
                    style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}   
                    onClick = {() => this.setActiveColor(color)}
                    >
                    </span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header bg">
                        <h3 className="card-title">Color Picker</h3>
                    </div>
                    <div className="card-body">
                        {emplements}
                    </div>
                    
                </div>
          </div>
        );
    }
}

export default ColorPicker;