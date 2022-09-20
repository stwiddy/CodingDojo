import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
    

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map( (eachProduct, i) =>
                <p key={i}>
                    <Link to={`api/products/${eachProduct._id}`}>
                        {eachProduct.title}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(eachProduct._id)}}>
                        Delete
                    </button>
                </p>
            )}
        </div>
    )
}
    
export default ProductList;