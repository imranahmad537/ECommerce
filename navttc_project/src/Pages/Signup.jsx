import React from "react";
import Reg from "../assets/Reg.jpeg";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <span className="head1">Create an account</span>
        <h5 cla>Enter your details below</h5>
     
        </div>
           <form onSubmit={handleSubmit} className="signupform">
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email or Phone Number" required/>
          <input type="password" placeholder="Password" required />
          <button className="createAccount">Create Account</button>
          <Link to='/app' className="con_google"> Continue with Google</Link>
        </form>
        <p><b></b>Already have account? <b><u><Link to='/login'>Sign in</Link></u></b></p>
      </div>
    </section>
  );
};

export default Signup;
