import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import DriverNav from './DriverNav'
import DriverSelectedTrip from './DriverSelectedTrip'
import './css/driver-trips.css'
import './css/dashboard.css'


class DriverSendQuote extends Component {

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

    const TextInput = () => (
      <div id="default-text-div">
        <h2>Say hi to {this.state.selected_trip["Nickname"]} (and give a quote!):</h2>
        <div className="send-message">
          <textarea name="message" rows="8" cols="80" id="offer-content" value={defaultInput}>
          </textarea>
        </div>
      </div>
    );

    const Buttons = () => (
      <div className="horizontal-group">
        <Link to="/driver_new_requests"><button className="dashboard-button progress left">Back</button></Link>
        <Link to="/driver_quote_sent"><button className="dashboard-button progress" >Send</button></Link> 
      </div>
    )

    return (
      <div className="dashboard-display">
      <DriverNav />
      <div className="container">
        <DriverSelectedTrip />
        <TextInput />
        <Buttons />
      </div>
      </div>
    );
  }
}

export default DriverSendQuote;