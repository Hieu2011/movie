import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import productApi from './api/productApi';

function App() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    const fetchProductList = async () =>{
      try {
        const param ={
          _page : 1,
          _limit :10
        }
        const data = {
          name : 'axios_test' ,
          price : '20000',
          status : true
        }
        const respose = await productApi.getAll();
        console.log(respose);
        setproducts(respose);
      } catch (error) {
        console.log('failed to connect api product '+error.message);
      }
    }
    fetchProductList();
    return () => {
      
    }
  }, []);
  async function handelEdit(id) {
    console.log(id);
    const data ={
      name : 'hieu_edit',
      price : '1300000',
      status : true
    }
    try {
      const response = await productApi.putData(id,data);
      console.log(response);
    } catch (error) {
      console.log('failed to connect api : ' + error.message);
    }
    
  }
  async function handelDelete(id) {
    console.log(id);
    
    try {
      const response = await productApi.deleteData(id);
      console.log(response);
    } catch (error) {
      console.log('failed to connect api : ' + error.message);
    }
    
  }
  async function handelAdd() {
    const data ={
      name : 'Hăn xạo sự',
      price : '1300000',
      status : true
    }
    try {
      const response = await productApi.postData(data);
      console.log(response);
    } catch (error) {
      console.log('failed to connect api : ' + error.message);
    }
    
  }
  return (
    <div >
      <HomePage />

      <button onClick={() =>handelEdit(13)}>Sửa</button>
      <button onClick={() =>handelAdd()}>Thêm</button>
      <ul>
        {products.map((product,index)=>(
          <li key={product.id}>
            {product.name}
            <button onClick={() =>handelDelete(product.id)}>Xóa</button>

          </li> 
        ))}
      </ul>

    </div>
  );
}

export default App;
