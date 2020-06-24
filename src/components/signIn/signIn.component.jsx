import React from 'react';

import './signIn.styles.scss';

import mail_icon from '../../img/mail.png';
import password_icon from '../../img/password.png';
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

import {Link} from 'react-router-dom';

import CustomButton from '../custom-button/customButton.component';

import FormInput from '../form-input/formInput.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='signin'>
                <h3 className='signin__heading'>I already have an account</h3>
                <span className='signin__instruction'>Sign in using the given credentials</span>

                <form className='signin__form' onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' imgUrl={mail_icon} required />
                    
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' imgUrl={password_icon} required />
                    
                    <div className='button-container'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                    
                </form>

                <Link to='/signup' className='signin__link'>Don't have an account! Sign Up</Link>
            </div>
        )
    }
}

export default SignIn;