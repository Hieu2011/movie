import axiosClient from "./axios";

const productApi =  {
    getAll : (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    postData : (data) => {
        const url = '/products';
        return axiosClient.post(url,  data );
    },
    putData : (id,data) =>{
        const url =`/products/${id}`;
        return axiosClient.put(url,data);
    },
    deleteData : (id) =>{
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }

}

export default productApi;