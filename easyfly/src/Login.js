import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/master.css';
import './css/login.css';

const Login = (props) => {
  return (
    <div className="container">
      <div className="vertical-middle">
        <h1>Log In as a {props.usertype}</h1>
        <div className="signup-form">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="button">Log In</button>
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