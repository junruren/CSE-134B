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
    <div style={{textAlign: 'center'}}>
      <div className="vertical-middle">
        <h1 style={{color: 'black', fontSize: '2.5em'}}>Log In as a {props.usertype}</h1>
        <div className="signup-form">
          <input style={{...styles.rectangles, ...styles.textInput}} type="email" name="email" placeholder="Email" />
          <input style={{...styles.rectangles, ...styles.textInput}} type="password" name="password" placeholder="Password" />
          <Link to={loginUrl} style={{display: 'block'}}><button style={styles.rectangles} className="button">Log In</button></Link>
          <Link to="/">Forgot the password?</Link>
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

const styles = {
  rectangles: {
    width: '60%',
    height: '50px',
    margin: '40px auto',
    display: 'block',
    border: '1px solid black',
    borderRadius: '5px',
    fontSize: '1em'
  },
  textInput: {
    textAlign: 'left',
    paddingLeft: '10px'
  }
}