import React from 'react';
import { Link } from 'react-router-dom';

import './css/login.css';

const Login = (props) => {
  var loginUrl = '';
  if (props.usertype === 'Driver') {
    loginUrl = '/driver_home';
  } else if (props.usertype === 'Rider') {
    // Implement it here
  }
  
  return (
    <div className="container">
      <div className="vertical-middle">
        <h1 style={{color: 'black'}}>Log In as a {props.usertype}</h1>
        <div className="signup-form">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <Link to={loginUrl}><button className="button">Log In</button></Link>
          <a href="#">Forgot the password?</a>
          <p>Don't have an account? Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export const DriverLogin = () => {
  return <Login usertype="Driver" />;
};

export const RiderLogin = () => {
  return <Login usertype="Rider" />;
};