import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

import './css/dashboard.css';

class DriverHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasTrip: false,
      user: 'John',
      trip: {
        "Name": "Marco Botton",
        "Total Riders": 2,
        "Pick-up": "SAN",
        "Destination": "Irvine",
        "Flight Number": "AA1270",
        "Arrival Time": "2018-01-25 05:25",
        "Nickname": "Mark",
        "Status": "Confirmed"
      }
    };
  }

  componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }

  render() {

    if (this.state.hasTrip == false) {
      return (
        <div>
          <Nav />
          <div class="container" id="dashboard_layout">
            <div className="vertical-middle"> 
              <h1>Hello, {this.state.user} </h1>
              <h2>Ready to take another order?</h2> 
              <button className="button homepage" id="find_riders">Find Riders</button> 
            </div>
          </div>
        </div>
      );
    }

    else {
      return (
        <div>has trip</div>
      )
    }

  }
}

export default DriverHome;
