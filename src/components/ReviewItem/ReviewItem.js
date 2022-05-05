import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props.product);
    const {name, quantity, img, seller, price, stock, id} = props.product;
    return (
        <div className='review-item'>
            <h3>{name}</h3>
            <h5>Quantity; {quantity}</h5>
            <button className='product-btn'>Remove Item</button>

        </div>
    );
};

export default ReviewItem;