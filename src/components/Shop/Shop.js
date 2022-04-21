import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);    // taking only 10 data from the data source;
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {   // for event handler...this is some particular rule;
        
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => 
                    <Product 
                        product = {pd}
                        handleAddProduct = {handleAddProduct}
                        >
                    </Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;