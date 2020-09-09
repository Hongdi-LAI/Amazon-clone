import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
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
            <h1>checkout</h1>
          </Route>
          <Route path = "/login">
            <h1>login</h1>
          </Route>
          {/* default route */}
          <Route path = "/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
