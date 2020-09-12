import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Bottom from './Bottom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {
  
  const [{ user }, dispatch] = useStateValue();
  // useEffect hook runs based on given condition
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          if(user){
            //user is logged in
            dispatch({
              type: 'SET_USER',
              user: user,
            });
          } else {
            // user is logged out
            dispatch({
              type: 'SET_USER',
              user: null,
            });
          }
        });

        return () => {
          // Any cleanup go in here
          // if App re-render, it will detach and reattach with a new listener
          unsubscribe();
        };
  }, []);

    console.log("user is this", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* wild card path */}
          {/*  
          <Route path = "/checkout/:someRandomId/page">
            <h1>checkout</h1>
          </Route>
          */}
          <Route path = "/checkout">
            <Header />
            <Checkout />
            <Bottom />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          {/* default route */}
          <Route path = "/">
            <Header />
            <Home />
            <Bottom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
