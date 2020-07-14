import React, { useEffect } from 'react';
import './App.css';
import HomePage from '../src/pages/home-page/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.components';
import SignInPage from '../src/pages/sign-in/signInPage.component';
import SignUpPage from '../src/pages/sign-up/signUpPage.component';
import CheckoutPage from '../src/pages/checkout/checkout.component';

import { connect } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

	useEffect(() => {
		checkUserSession()
	}, [checkUserSession]);
	
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/signin' render={() => 
													currentUser ? (
														<Redirect to='/' />
													) : (
														<SignInPage />
													)} />
					<Route exact path='/signup' render={() => 
													currentUser ? (
														<Redirect to='/' />
													) : (
														<SignUpPage />
													)} />
					<Route exact path='/checkout' component={CheckoutPage} />
				</Switch>
			</BrowserRouter>
			
		</div>
		);
 
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
