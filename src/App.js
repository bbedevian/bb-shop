import React, { Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component'
import Header from './components/header/header.component'
import './App.css'

class App extends Component {

unsubscribeFromAuth = null

componentDidMount(){
  const {setCurrentUser} = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser( {
              id: snapShot.id,
              ...snapShot.data()
            })
          });
        }
        setCurrentUser(userAuth)
  })

} 

componentWillUnmount(){
  this.unsubscribeFromAuth();
}


render() { 
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp/>)}/>
      </Switch>
    </div>
  )
}
}

const msp = ({user}) => ({
  currentUser: user.currentUser
})
const mdp = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(msp, mdp)(App);
