import React, { Component } from 'react';
class Product extends Component {
    onAddtoCart = () => {
        console.log('Mua Thành Công '+this.props.name);
    }
    render() {
        
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="product">
                    <img data-src="#" src={ this.props.image } alt="{ this.props.name }"></img>
                    <div className="caption">
                        <h3>{ this.props.name }</h3>
                        <p>
                            { this.props.price } VNĐ
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary" onClick={ this.onAddtoCart }>Mua Hàng</a>
                        </p>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Product;