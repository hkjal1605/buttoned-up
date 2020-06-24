import React from 'react';

import './signUp.styles.scss';

import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-button/customButton.component';

import mail_icon from '../../img/mail.png';
import password_icon from '../../img/password.png';
import name_icon from '../../img/name.png';

import {Link} from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords dont match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
 
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='signup'>
                <h3 className='signup__heading'>I do not have an account</h3>
                <span className='signup__instruction'>Sign up using the given credentials</span>

                <form className='signup__form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        imgUrl={name_icon}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        imgUrl={mail_icon}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        imgUrl={password_icon}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
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
} 

export default SignUp;