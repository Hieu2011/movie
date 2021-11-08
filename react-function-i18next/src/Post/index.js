import React, { useState, useEffect, createRef } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import {useTranslation, withTranslation} from "react-i18next";

function PostData(props) {
    const [products, setproducts] = useState([]);
    const [t, i18n] = useTranslation('common');
    useEffect(() => {
        axios.get('products/')
            .then(response => {
                setproducts(response.data);
            })

    }, []);
    if (!products) return <h1>No Data</h1>;
    
    return (
        products.map((product,index) => {
            return <div className='row mb-4'>
                <div className="col-4">
                    <img className="img-fluid" style={{"width":"50%"}} src={product.image} alt="product" />
                </div>
                <div className="col-8">
                    <h2>{product.name}</h2>
                    <p style={{"fontSize":"20px"}}>{t(`product_trans.${index}.id`) == product.id ? t(`product_trans.${index}.description`) : ''}</p>
                </div>
            </div>
        })

    )
}



export default PostData

