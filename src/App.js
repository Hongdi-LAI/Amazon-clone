import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Bottom from "./Bottom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import SubHeader from "./SubHeader";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AmazonPrime from "./AmazonPrime";

// Stripe public API Key
const promise = loadStripe(
  "your_public_stripe_api_key"
);

function App() {
  // App Title
  useEffect(() => {
    document.title = "Amazon - Clone";
  }, []);

  const [{ user }, dispatch] = useStateValue();
  // useEffect hook runs based on given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
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

  //console.log("user is this", user);

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

          <Route path="/orders">
            <Header />
            <SubHeader />
            <Orders />
            <Bottom />
          </Route>
          <Route path="/amazonprime">
            <Header />
            <SubHeader />
            <AmazonPrime />
            <Bottom />
          </Route>
          <Route path="/checkout">
            <Header />
            <SubHeader />
            <Checkout />
            <Bottom />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Bottom />
          </Route>
          {/* default route */}
          <Route path="/">
            <Header />
            <SubHeader />
            <Home />
            <Bottom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
