import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert('Passwords do not match')
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.log(err);
        }

    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up below</span>

            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput onChange={this.handleChange} type='text' name='displayName' value={displayName} label='name' required/>
                <FormInput onChange={this.handleChange} type='email' name='email' value={email} label='email' required/>
                <FormInput onChange={this.handleChange} type='password' name='password' value={password} label='password' required/>
                <FormInput onChange={this.handleChange} type='password' name='confirmPassword' label='confirm password' value={confirmPassword} required/>
                <CustomButton type='submit' >Sign Up </CustomButton>
            </form>
                
            </div>
        );
    }
}

export default SignUp;
