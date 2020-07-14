import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import './signUp.styles.scss';

import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-button/customButton.component';

import mail_icon from '../../img/mail.png';
import password_icon from '../../img/password.png';
import name_icon from '../../img/name.png';

import {Link} from 'react-router-dom';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setCredentials] = useState({ displayName:'', email: '', password: '', confirmPassword:''})

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert('Passwords dont match');
            return;
        }
        
        signUpStart({ displayName, email, password});
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return(
        <div className='signup'>
            <h3 className='signup__heading'>I do not have an account</h3>
            <span className='signup__instruction'>Sign up using the given credentials</span>

            <form className='signup__form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    imgUrl={name_icon}
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    imgUrl={mail_icon}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    imgUrl={password_icon}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    imgUrl={password_icon}
                    required
                />
                <div className='button-container'>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </div>
                
            </form>

            <Link to='/signin' className='signin__link'>Have an Account! Sign In</Link>
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);