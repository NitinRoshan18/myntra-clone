import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt=""
          className="login-page-image"
        />

        <div className="login-components">
          <span>
            <h3>Login</h3> <h5>or</h5> <h3>Signup</h3>
          </span>
          <input
            type="email"
            placeholder="+91|Mobile Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            By continuing, I agree to the <a href="/">Terms of Use</a> &{" "}
            <a href="/">Privacy Policy</a>
          </p>
          <button type="submit" onClick={signIn}>CONTINUE</button>
          <p>
            Have trouble logging in? <a href="/">Get help</a>
          </p>
        </div>
        <button className='newAccount_button' onClick={register}>New Account</button>
      </div>
    </div>
  );
}

export default Login;
