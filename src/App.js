import React, { Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component'
import Header from './components/header/header.component'
import './App.css'
import {Route, Switch} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  state ={
    currentUser: null
  }

  unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      } else {this.setState({currentUser: null})}
  })

} 

componentWillUnmount(){
  this.unsubscribeFromAuth();
}


render() { 
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInSignUp}/>
    </Switch>
    </div>
  )
}
}

export default App;
