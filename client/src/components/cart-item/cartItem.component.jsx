import React from 'react';

import './cartItem.styles.scss';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='Item Image' className='cart-item__img'></img>
        <div className='cart-item__details'>
            <span className='cart-item__details--item-name'>{name}</span>
            <span className='cart-item__details--item-price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;