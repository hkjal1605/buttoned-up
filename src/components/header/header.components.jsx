import React from 'react';

import { createStructuredSelector } from 'reselect'; 

import './header.styles.scss';
import Logo from '../../img/clothes.png'

import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cartIcon.component';
import CartDropdown from '../cart-dropdown/cartDropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header-1'>
    <div className='header'>
        <Link to='/' className='header__logo link'>
        <img src={Logo} className='header__logo--img'></img>
        <h1 className='header__logo--name'>BUTTONED-UP</h1>
        </Link>
        <div className='header__text'>
            <Link to='/shop' className='link'>
                <h4 className='header__options'>Complete Collection</h4>
            </Link>
            <Link to='/' className='link'>
                <h4 className='header__options'>Women</h4>
            </Link>
            <Link to='/' className='link'>
                <h4 className='header__options'>Men</h4>
            </Link>

            {
                currentUser ? (
                    <div className='header__options' onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link className='header__options link' to='/signin'>Sign In</Link>
                )
            }

            <CartIcon />
            
        </div>
        
    </div>
    { hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
