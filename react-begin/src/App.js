import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
import Product from './component/Product';
import ColorPicker from './component/ColorPicker';
import Reset from './component/Reset';
import Result from './component/Result';
import SizeSetting from './component/SizeSetting';

import React, { Component, createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.StateIsActive = React.createRef();
    this.state = {
      products2 : [
        {
          id : 1,
          name :'Iphone X',
          price : 500000,
          image : 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-400x400.jpg',
          status : true
        },
        {
            id : 2,
            name :'Iphone 11',
            price : 1500000,
            image : 'https://www.pngitem.com/pimgs/m/516-5165169_refurbished-apple-iphone-11-64gb-red-vodafone-a.png',
            status : true
        },
        {
            id : 3,
            name :'Iphone 12',
            price : 2500000,
            image : 'https://static.esrgear.com/wp-content/uploads/2021/01/iPhone-12-HD-Clear-Tempered-Glass-Camera-Lens-Protector.jpg',
            status : true
        }
      ],
      isActive : true,
      color : 'red',
      fontSize : 15,
      txtName: '',
      txtPass: '',
      txtDescription: '',
      sleGender: 1,
      radLan: 'vn',
      chkStatus: true
      
      
    };
    console.log(this.state.products2);
    console.log('product');
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetSize = this.onSetSize.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }
  onAddtoProduct = () =>{
    this.inputName.current.focus();
    console.log(this.inputName.current.value);
    
  }
  onSetState = () =>{
    console.log('click me');
    this.setState({
      isActive : !this.state.isActive
    });
    console.log(this.state.isActive);
    
  }
  onSetColor(param){
    this.setState({
      color: param
    });
  }
  onSetSize(value){
    console.log(value);
    this.setState({
      fontSize: this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36 ? this.state.fontSize + value : this.state.fontSize
    });
  }
  onReset(value){
    console.log(value);
    if(value){
      this.setState({
        color:'red',
        fontSize: 15
      });
    }
  }
  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = name == 'chkStatus'? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  render() {

    var products = [
      {
          id : 1,
          name :'Iphone X',
          price : 500000,
          image : 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-400x400.jpg',
          status : true
      },
      {
          id : 2,
          name :'Iphone 11',
          price : 1500000,
          image : 'https://www.pngitem.com/pimgs/m/516-5165169_refurbished-apple-iphone-11-64gb-red-vodafone-a.png',
          status : true
      },
      {
          id : 3,
          name :'Iphone 12',
          price : 2500000,
          image : 'https://static.esrgear.com/wp-content/uploads/2021/01/iPhone-12-HD-Clear-Tempered-Glass-Camera-Lens-Protector.jpg',
          status : true
      }

    ];
    let emplements = products.map((product,index)=>{
        let result = '';
        if(product.status != false){
            return  <Product
                    key = {product.id}
                    price = {product.price}
                    image = {product.image}
                    name = {product.name}
                >
                    
                </Product>
        }
        return result;
    });
    let emplements2 = this.state.products2.map((product2, index) =>{
        let result = '';
        
        return <tr key={product2.id}>
                <td>{product2.id}</td>
                <td>{product2.name}</td>
                <td>
                  
                  <span className="label label-success">{product2.price} VNĐ</span>
                  
                </td>

              </tr>;
    });
    return (
      <div>
        <h1>hello</h1>
        <Demo></Demo>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                <h3 className="card-title">Thêm sản phẩm</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Thêm mới sản phẩm: </label>
                        <input type="text" className="form-control"  ref={this.inputName}/>
                    </div>
                      <button type="submit" className="btn btn-primary" onClick={this.onAddtoProduct}>Lưu</button>
                    </div>
                </div>
                <div className="card-footer text-muted">
                  Footer
                </div>
              
            </div>
            
                
           
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 products">
              { emplements }
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>Iphone XX</td>
                    <td>
                      
                      <span className="label label-success">5.000.000 VNĐ</span>
                      
                    </td>

                  </tr>
                  {emplements2}
                </tbody>
              </table>
              
              <button type="button" className="btn btn-info" onClick={this.onSetState}>
                SetState :  {this.state.isActive === true ? 'True' : 'Flase'}
              </button>
              
              <span style={{ 'fontSize': '20px' }} ref={this.StateIsActive}>Giá trị Active: {this.state.isActive == true ? 'True' : 'Flase'}</span>
              
              
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 products">
              
              <ColorPicker color={this.state.color} onReciveColor={this.onSetColor}></ColorPicker>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <SizeSetting fontSize={this.state.fontSize} onSetSize={this.onSetSize}></SizeSetting>
                  <Reset onReset={this.onReset}></Reset>

              </div>

              
              
            </div>
            <Result fontSize={this.state.fontSize} color={this.state.color}></Result>
            <div className="col-lg-8 mt-4 center-form">
              <div className="card">
                <div className="card-header">
                  Form
                </div>
                <div className="card-body">
                  <form onSubmit={this.onHandleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Tên</label>
                      <input type="text" name="txtName" id="txtName" onChange={this.onHandleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">PassWord</label>
                      <input type="password" name="txtPass" id="txtPass" onChange={this.onHandleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mô Tả</label>
                      <textarea  onChange={this.onHandleChange} className="form-control" name="txtDescription"></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Giới tính</label>
                      <select
                       value={this.state.sleGender}
                       onChange={this.onHandleChange} 
                       className="form-control" name="sleGender" 
                       id="sleGender">
                          <option value={0}>Nữ</option>
                          <option value={1}>Nam</option>
                        </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ngôn ngữ</label>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input checked={this.state.radLan == 'vn'} onChange={this.onHandleChange}  type="radio"  className="form-check-input" name="radLan" id="" value="vn" />
                          Việt Nam
                        </label>
                        
                      </div>
                      <div className="form-check">
                          <label className="form-check-label">
                            <input checked={this.state.radLan == 'en'} onChange={this.onHandleChange} type="radio" className="form-check-input" name="radLan" id="" value="en" />
                            English
                          </label>
                      </div>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" onChange={this.onHandleChange} className="form-check-input" name="chkStatus" id="chkStatus" value={true} checked={this.state.chkStatus === true}/>
                      <label className="form-check-label" >
                        Trạng thái
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-dark">Lưu</button>
                    <button type="reset" className="btn btn-danger ">Xóa trắng</button>

                  </form>
                  
                </div>
                
              </div>
            </div>
            
        </div>
      </div>
    );
  }
}

export default App;
