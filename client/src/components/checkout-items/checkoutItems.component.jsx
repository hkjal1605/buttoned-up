import React from 'react';

import './checkoutItems.styles.scss';

import { connect } from 'react-redux';

import {ClearItem, AddItem, RemoveItem} from '../../redux/cart/cart.actions';

const CheckoutItems = ({cartItem, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price} = cartItem;
    return(
    <div className='checkout-item'>
        <div className='checkout-item__img-container'>
            <img alt='item' src={imageUrl} className='checkout-item__img-container--img'/>
        </div>
        <div className='checkout-item__name'>{name}</div>
        <div className='checkout-item__quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#8882;</div>
            <span className='checkout-item__quantity--value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#8883;</div>
        </div>
        <div className='checkout-item__price'>${price}</div>
        <div className='checkout-item__remove' onClick={() => clearItem(cartItem)}>&#9747;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(ClearItem(item)),
    addItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(RemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);