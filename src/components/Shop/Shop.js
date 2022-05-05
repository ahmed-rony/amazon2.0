import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(15, 30);    // taking only 10 data from the data source;
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {   // for event handler...this is some particular rule;
        
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.id === product.id);
        const count = sameProduct.length;
        addToDb(product.id, count);
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => 
                    <Product 
                        product = {pd}
                        handleAddProduct = {handleAddProduct}
                        showAddToCart={true}
                        key={pd.id}
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