import React from "react";
import "./Login.css";

function Login() {
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
               <input placeholder="+91    |   Mobile Number" />
             <p>
                 By continuing, I agree to the <a>Terms of Use</a> &{" "}
                 <a>Privacy Policy</a>
             </p>
                 <button>CONTINUE</button>
             <p>
                 Have trouble logging in? <a>Get help</a>
             </p>
         </div>
      </div>
    </div>
  );
}

export default Login;
