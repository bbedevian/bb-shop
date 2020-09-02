import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styles.scss'


class SignIn extends Component {
    state = {
        email: '',

        password: ''
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (err){
            console.log(err)
        }
    }

    render() {
        const {email, password} = this.state
        const{handleSubmit, handleChange} = this
        return (
            <div className='sign-in'>
                <h2>I Already Have an Account</h2>
                <span>Sign in withyour email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput handleChange={handleChange} name='email' type='email' value={email} label='email' required/>
                    <FormInput handleChange={handleChange} name='password' type='password' label='password' value={password} required/>
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn type='button'>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
