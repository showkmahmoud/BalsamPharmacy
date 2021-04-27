import "./App.css";
import Navbar from "./Navbar/Navbar";
import JopApplication from "./JopApplication/JopApplication";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { handleUserProfile } from "./firebase/config";
import { auth } from "./firebase/config";
import React, { useState, useEffect } from "react";
import Admin from "./Admin/Admin";
import ContextProvider from "./Context/Context";
import ProductDetails from "./ProductDetails/ProductDetails";
import { Checkout } from "./Checkout/Checkout";

import OrderSuccess from "./OrderSuccess/OrderSuccess";
import OrdersHistory from "./OrdersHistory/OrdersHistory";

function App() {
  const initialState = {
    currentUser: null,
  };
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({
            currentUser: {
              id: snapshot.id,
            },
          });
        });
      } else {
        setUser({
          ...initialState,
        });
      }
    });
  }, []);

  return (
    <ContextProvider>
      <Router>
          <Navbar user={user} />
          <Switch>
            {/* <div className="container"> */}
            {/* <Home /> */}
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route exact path="/Products" component={Products} />
            <Route path="/Products/:documentID" component={ProductDetails} />
            <Route path="/About" component={About} />
            <Route path="/Contacts" component={Contacts} />
            <Route
              path="/admin"
              render={() =>
                user.currentUser ? <Admin></Admin> : <Redirect to="/" />
              }
            />
            <Route
              path="/SignIn"
              render={() =>
                user.currentUser ? <Redirect to="/" /> : <SignIn></SignIn>
              }
            />
            <Route
              path="/SignUp"
              render={() =>
                user.currentUser ? <Redirect to="/" /> : <SignUp></SignUp>
              }
            />
            

            <Route path="/Cart" component={() => <Cart user={user} />} />
            <Route path="/Checkout" component={() => <Checkout user={user} />} />
            <Route path="/OrderSuccess" component={OrderSuccess} />
            <Route path="/OrdersHistory" component={() => <OrdersHistory user={user} />} />
            <Route path="/JobApplication" component={JopApplication} />
          
            {/* </div> */}
          </Switch>
        
          <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
