import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  /*constructor(){
    super();
    this.state = {
      currentUser : null,
    }
  }*/

  unSubcribeFroAuth = null;

  componentDidMount(){
    const that = this;
    const {setCurrentUser} = this.props;
    this.unSubcribeFroAuth = auth.onAuthStateChanged(async function(userAuth){
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(function(snapShot){
            setCurrentUser({
              currentUser:{
                id: snapShot.id,
                ...snapShot.data()
              }
            }, function(){
              console.log(that.state);
            });
        });

      } else{
        setCurrentUser(userAuth);
      }
    });
  }
  
  componentWillUnmount(){
    this.unSubcribeFroAuth();
  } 

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});
  


export default connect(null, mapDispatchToProps )(App);
