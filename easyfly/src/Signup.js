import React from 'react';
import { Link } from 'react-router-dom';

import './css/signup.css';

const BasicInfo = () => {
  return (
    <div style={styles.outerStretch}>
      <div style={styles.flex} className="names-field">
        <input type="text" name="firstname" placeholder="First Name" style={{...styles.innerPadding, ...styles.vertical, ...styles.namesInput}} />
        <input type="text" name="lastname" placeholder="Last Name" style={{...styles.innerPadding, ...styles.vertical, ...styles.namesInput}} />
      </div>
      <div>
        <input type="number" name="phone-number" placeholder="Phone Number" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
      <div>
        <input type="password" name="confirm-password" placeholder="Confirm Password" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
    </div>
  );
};

const DriverInfo = () => {
  return (
    <div style={styles.outerStretch}>
      <hr/>
      <div>
        <input type="text" name="driver-license-number" placeholder="Driver License Number" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}}/>
      </div>
      <div>
        <Link to="/">Upload scanned license</Link>
      </div>
      <div className="vehicle" style={styles.flex}>
        <select className="vehicle-info" name="year" id="vehicle-year" style={{...styles.vertical, ...styles.vehicleSelect}}>
          <option disabled selected>Year</option>
        </select>
        <select className="vehicle-info" name="make" id="vehicle-make" style={{...styles.vertical, ...styles.vehicleSelect}}>
          <option disabled selected>Make</option>
        </select>
        <select className="vehicle-info" name="model" id="vehicle-model" style={{...styles.vertical, ...styles.vehicleSelect}}>
          <option disabled selected>Model</option>
        </select>
        <select className="vehicle-info" name="color" id="vehicle-color" style={{...styles.vertical, ...styles.vehicleSelect}}>
          <option disabled selected>Color</option>
        </select>
      </div>
      <div className="num-passengers" style={styles.flex}>
        <label>Max number of passengers</label>
        <select className="vehicle-info" name="max-passengers" id="max-passengers" style={{...styles.vertical, height: '30px', width: '20%'}}>
        </select>
      </div>
      <hr/>
      <div>
        <select className="airport" name="airport" id="airport" style={{...styles.vertical, ...styles.innerStretch}}>
          <option disabled selected>Home Base Airport</option>
        </select>
      </div>
    </div>
  );
};

const SignUpButtons = () => {
  return (
    <div style={styles.outerStretch}>
      <div>
        <button className="button" style={styles.innerStretch}>Sign Up</button>
      </div>
      <p style={{textAlign: 'center'}}>Already have an account? Log In</p>
    </div>
  );
};

export const RiderSignup = () => {
  return (
    <div className="vertical-middle">
      <h1 style={{fontSize: '2.5em', textAlign: 'center'}}>Sign Up as a Rider</h1>
      <BasicInfo />
      <SignUpButtons />
    </div>
  );
};

export const DriverSignup = () => {
  return (
    <div className="vertical-middle">
      <h1 style={{fontSize: '2.5em', textAlign: 'center'}}>Sign Up as a Driver</h1>
      <BasicInfo />
      <DriverInfo />
      <SignUpButtons />
    </div>
  );
};

const styles = {
  outerStretch: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  },
  innerStretch: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  },
  innerPadding: {
    paddingLeft: '10px'
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  namesInput: {
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '0',
    width: '40%'
  },
  vertical: {
    height: '40px',
    display: 'block',
    fontSize: '1em',
    border: '1px solid black',
    borderRadius: '5px',
    marginTop: '20px',
    marginBottom: '20px'
  },
  vehicleSelect: {
    width: '20%',
    marginLeft: '0',
    marginRight: '0',
    height: '30px'
  }
};
