import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect( () => {
        //  cart data;
        const savedCart = getStoredCart();
        const productIds = Object.keys(savedCart);
        const productCart = productIds.map( key => {
            const products = fakeData.find( pd => pd.id === key);  // understasnd what has been done; video: 37/7;
            const product = products || {};
            product.quantity = savedCart[key];  // jhanker just wrote this, but we need also the above line;
            return product;
        });
        setCart(productCart);
        // console.log(productCart);
    });
    return (
        <div className='review-container'>
            <h1 style={{color:'#fff', background:'#333652', padding:'25px 0', textAlign:'center'}}>Review order: {cart.length}</h1>
            {
                cart.map( pd => <ReviewItem product={pd} key={pd.id} ></ReviewItem>)
            }
        </div>
    );
};

export default Review;