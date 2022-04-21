import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    
    return (
        <div className='product'>
            <div>
                <img className='product-img' src={img} alt="" />
            </div>
                <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p className='product-price'>${price}</p>
                <p className='product-stock'><small>Only {stock} items left in stock - Grab it now</small></p>
                <button className="product-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                
            </div>
            <div></div>
        </div>
    );
};

export default Product;