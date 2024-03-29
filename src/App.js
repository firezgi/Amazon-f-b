//Hosting URL: https://front-clone.web.app
//https://front-clone.web.app/
//Project Console: https://console.firebase.google.com/project/front-clone/overview
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React,{ useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
const promise= loadStripe('pk_test_51JLEuGC3gTmIR4L1V8ykqw1uZdZ4pgGh7ywMgqpgUZvNYI972n6KivhgTfXJUq8uPpcteoILaYtTMfGdXoHysWj300qefA6rUR');


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    
  
    document.title = "Amazon Clone"
  
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
