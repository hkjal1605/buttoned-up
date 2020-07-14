import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItems from '../../components/checkout-items/checkoutItems.component';
import StripeCheckoutButton from '../../components/stripe-checkout/stripeCheckout.component';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-page__header'>
            <div className='checkout-page__header--block'>
                <span>Product</span>
            </div> 
            <div className='checkout-page__header--block'>
                <span>Description</span>
            </div>
            <div className='checkout-page__header--block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-page__header--block'>
                <span>Price</span>
            </div>
            <div className='checkout-page__header--block'>
                <span>Remove</span>
            </div>
            <span className='checkout-page__header-bottom'></span>
        </div>

        {
            cartItems.map(cartItem => (
                <CheckoutItems key={cartItem.id} cartItem={cartItem}></CheckoutItems>
            ))
        }

        <div className='total'>TOTAL: ${total}</div>
        <div className='warning'>
            The payment method used here is the test payment. Use the following card details for payment<br />Card No.: 4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);