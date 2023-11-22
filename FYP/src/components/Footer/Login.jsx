import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Login.css';

const Login = () => (
  <div className="app__login" id="login">
    <div className="app__login-heading">
      <SubHeading title="Login" />
      <h1 className="headtext__cormorant">Login</h1>
      <p className="p__opensans">For Delicious Bites</p>
    </div>
    <div className="app__login-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <br></br>
      <input type="pass" placeholder="Password" />
      <br/>
      <button type="button" className="custom__button">Login</button>
    </div>
  </div>

);

export default Login;
