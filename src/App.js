import React from 'react';
import './App.css';
import HomePage from '../src/pages/home-page/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from '../src/components/header/header.components';
import SignInPage from '../src/pages/sign-in/signInPage.component';
import SignUpPage from '../src/pages/sign-up/signUpPage.component';
import CheckoutPage from '../src/pages/checkout/checkout.component';

import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';

import { connect } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors'; 


class App extends React.Component {
	
	unsubscribeFromAuth = null;

	componentDidMount() {
		const {setCurrentUser} = this.props;
		this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
					}
					);
				
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/signin' render={() => 
														this.props.currentUser ? (
															<Redirect to='/' />
														) : (
															<SignInPage />
														)} />
						<Route exact path='/signup' component={SignUpPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
					</Switch>
				</BrowserRouter>
				
			</div>
		  );
	}
 
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
