import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Checkout from "./Checkout";


function App() {
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
          <Route path="/login"  element={
            <>
            <Header />
            <Login/>
            </>
          } />
          <Route path="/Checkout"  element={
            <Checkout/>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
