import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

import './css/dashboard.css';

class DriverHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasTrip: true,
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
          <div className="container" id="dashboard_layout">
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
        <div className="container" id="dashboard_layout">
          <div className="vertical-middle with-more-info" id="greet-user">
            <h1>Hello, {this.state.user} </h1>
            <hr />
            <div className="dashboard-info flex-container">
              <div className="upcoming" id="trip-info">
                <h2>Upcoming: {this.state.trip["Arrival Time"]} </h2>    
                <h2>Picking up: {this.state.trip["Name"]}</h2> 
                <h2>Flight: {this.state.trip['Flight Number']}</h2>

                <div className="detail-buttons"> 
                  <button className="button indv-detail-button" id="ride-detail-button">Ride Details</button>  
                  <button className="button indv-detail-button" id="message-button">Message Your Guest</button> 
                  <button className="button indv-detail-button">Arriving Flight Info</button>
                </div>
              </div>

              <div className="todos">
                <div><input type="checkbox" checked /><button disabled className="button checklist">Find a request</button></div>
                <div><input type="checkbox" checked /><button disabled className="button checklist">Send price offer</button></div>
                <div><input type="checkbox" checked /><button disabled className="button checklist">Confirm deal</button></div>
                <div><input type="checkbox" /><button className="button checklist">Confirm driver arrival</button></div>
                <div><input type="checkbox" /><button className="button checklist">Confirm guests pickup</button></div>
                <div><input type="checkbox" /><button className="button checklist">Confirm dropoff</button></div>
                <div><input type="checkbox" /><button className="button checklist">Write a review</button></div>
              </div>
            </div>

            <div className = "more-links"> 
              <a className = "more-links-content" href="driver-all-requests.html">See All Upcoming</a> 
              <a className = "more-links-content" href="driver-new-request.html">Find New Rides</a> 
            </div>

          </div>

        </div>

      );
    }

  }
}

export default DriverHome;
