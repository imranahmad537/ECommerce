import React from "react";
import Reg from "../assets/Reg.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {
    console.log("handle submit");
  };
  return (
    <section className="container">
      <div className="left">
        <img src={Reg} alt="google icon" />
      </div>
      <div className="right">
        <div className="heading">
          <span className="head1">Sign in to Exclusive</span>
          <h5 cla>Enter your details below</h5>
        </div>
        <form onSubmit={handleSubmit} className="signupform">
          <input type="email" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <div className="loginbtn">
            <Link to="/app" className="login">Login</Link>
            <button className="forgot_pass"> Forgot Password?</button>
          </div>
        </form>
        <p><b></b>Don't have an account? <b><u><Link to="/signup">Sign up</Link></u></b></p>
      </div>
    </section>
  );
};

export default Login;
