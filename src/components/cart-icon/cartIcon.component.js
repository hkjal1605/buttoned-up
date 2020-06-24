import React from 'react';
import { connect } from 'react-redux';

import './cartIcon.styles.scss';

import { ReactComponent as CartImg} from '../../img/shop.svg';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ToggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <CartImg className='cart-icon__img'></CartImg>
        <span className='cart-icon__count'>{ itemCount }</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})


const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);