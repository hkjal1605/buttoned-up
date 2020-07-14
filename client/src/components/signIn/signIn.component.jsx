import React, { useState } from 'react';
import { connect } from 'react-redux';

import './signIn.styles.scss';

import mail_icon from '../../img/mail.png';
import password_icon from '../../img/password.png';

import {Link} from 'react-router-dom';

import CustomButton from '../custom-button/customButton.component';

import FormInput from '../form-input/formInput.component';

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
    const [ userCredentials, setCredentials ] = useState({ name: '', password: ''});
    
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSigninStart(email, password);

    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials,  [name]: value });
    }

    return(
        <div className='signin'>
            <h3 className='signin__heading'>I already have an account</h3>
            <span className='signin__instruction'>Sign in using the given credentials</span>

            <form className='signin__form' onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} handleChange={handleChange} label='Email' imgUrl={mail_icon} required />
                
                <FormInput name='password' type='password' value={password} handleChange={handleChange} label='Password' imgUrl={password_icon} required />
                
                <div className='button-container'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSigninStart}>Sign In With Google</CustomButton>
                </div>
                
            </form>

            <Link to='/signup' className='signin__link'>Don't have an account! Sign Up</Link>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);