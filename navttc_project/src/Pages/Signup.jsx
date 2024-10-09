import React from 'react'

const Signup = () => {
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
        <input type="email" placeholder="Email or Phone Number" required/>
        <input type="password" placeholder="Password" required />
       <div className="loginbtn">
       <button className="login">Login</button>
       <button className="forgot_pass"> Forgot Password?</button>
       </div>
      </form>
      <p><b></b>Already have account? <b><u><a href="#">Log in</a></u></b></p>
    </div>
  </section>
  )
}

export default Signup
