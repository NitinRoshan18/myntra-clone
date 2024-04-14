import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { auth } from "./Firebase";
import { StateProvider, useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER", //user logged in
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER", //user logged out
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Header />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Checkout />
                <StateProvider />
              </>
            }
          />
          <Route
            path="/Payment"
            element={
                <Payment />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
