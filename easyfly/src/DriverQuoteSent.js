import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import DriverNav from './DriverNav'
import DriverSelectedTrip from './DriverSelectedTrip'
import './css/driver-trips.css'
import './css/dashboard.css'


class DriverQuoteSent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        user: 'John',
        selected_trip: {
            "Name": "Giacomo Guilizzoni",
            "Total Riders": 3,
            "Pick-up": "LAX",
            "Destination": "La Jolla",
            "Flight Number": "MU538",
            "Arrival Time": "2018-01-19 15:03",
            "Nickname": "Peldi",
            "Status": "Driver Arrival"
        }, 
      };
  }
  
   componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }

  render() {

    var defaultInput = 'Hi there! \n\nI\'d like to make an offer of $100 for your ride. \nPlease feel free to let me know if you have any questions! \n\nLooking forward to serve you! ';

    const SentText = () => (
      <div className="confirm-message" id="quote-sent"> {defaultInput} </div>
    );

    const Buttons = () => (
      <div className="horizontal-group">
        <Link to="/chat"><button className="button progress">View In Chat</button></Link>
      </div>
    )

    return (
      <div>
      <DriverNav />
      <div className="container">
        <DriverSelectedTrip />
        <h2>Quote successfully sent! </h2>
        <SentText />
        <Buttons />
      </div>
      </div>
    );
  }
}

export default DriverQuoteSent;