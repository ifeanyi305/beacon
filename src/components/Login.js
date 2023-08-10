import React from "react";
import "./styles/login.css";
import signupLogo from "./images/signupLogo.png";
import NIKE1 from "./images/NIKE1 (34) 1.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import { NavLink } from "react-router-dom";

export default function Login() {

  return (
    <div className="signUp-display">
      <div className="signUp-display-page">
        <div className="signUp-display-page-top">
          <img src={signupLogo} alt="signupLogo" width={"160px"} />
             <NavLink to='/'> &#10006;</NavLink>
        </div>
        <div className="signUp-display-page-text">
          <h1>BUILD THE BEST CRYPTO CASINO TOGETHER</h1>
          <img src={NIKE1} alt="sNIKE1" />
        </div>

        <div className="signUp-display-page-main">
          <form>
            <div className="signUp-first-flex">
              <label htmlFor="Email">Email Address</label>
              <input
                type="text"
                tabIndex="1"
                autoComplete="off"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="signUp-second-flex">
              <label htmlFor="Password">Login Password</label>
              <input
                type="password"
                tabIndex="1"
                autoComplete="off"
                placeholder="Login Password"
                required
              ></input>
            </div>

            <div className="login-submit">
              <div className="login-login">
                <button>Sign in</button>
              </div>
              <div className="login-signUp">
                <NavLink to="/signup">
                  <h2>Sign up</h2>
                  <h3> &#10095;</h3>
                </NavLink>
              </div>
            </div>
          </form>
          <div className="login-socials">
            <div className="login-socials-inner">
              <div className="login-socials-top">
                <h1>Login Directly with</h1>
              </div>
              <div className="login-socials-icons">
                <div className="login-socials-icons-inner">
                  <img src={icon1} alt="sNIKE1" width={"20"} />
                  <img src={icon2} alt="sNIKE1" width={"20"} />
                  <img src={icon3} alt="sNIKE1" width={"20"} />
                  <img src={icon4} alt="sNIKE1" width={"20"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
