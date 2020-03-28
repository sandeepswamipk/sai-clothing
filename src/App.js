import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser : null,
    }
  }

  unSubcribeFroAuth = null;

  componentDidMount(){
    const that = this;
    this.unSubcribeFroAuth = auth.onAuthStateChanged(function(user){
      that.setState({currentUser : user});
      console.log(user);
    })
  }
  
  componentWillUnmount(){
    this.unSubcribeFroAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
