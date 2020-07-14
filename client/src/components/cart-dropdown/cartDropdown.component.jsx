import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ToggleCartHidden } from '../../redux/cart/cart.actions';

import './cartDropdown.styles.scss';

import CustomButton from '../custom-button/customButton.component';
import CartItem from '../cart-item/cartItem.component';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'> 
        <div className='cart-dropdown__item-list'>
            {
                cartItems.length ?
                cartItems.map(
                    cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    )
                )
                : <span className='cart-dropdown__empty-cart'>Your Cart Is empty<br></br> Add some items to your cart</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(ToggleCartHidden());
        }} className='cart-dropdown__button'>Proceed To Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));