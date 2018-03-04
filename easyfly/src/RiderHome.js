import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RiderNav from './RiderNav'

import './css/dashboard.css';

class RiderHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_info_rider: {
        "first_name": "Scarlett",
        "last_name": "Honda",
        "nick_name": "Scarlett",
        "phone": "8581234567",
        "email": "scarlett_honda@example.com",
      },
      has_trip: false,
      rider_trip_demo: {
        "status": "yes",
        "has_departure": true,
        "has_arrival": true,
        "departure": {
          "flight_info": {
            "flight_number": "CA983",
            "origin": "Beijing (PEK)",
            "date": "2018-08-01",
            "time": "9:00pm",
            "share_allowed": true,
          },
          "passenger_info": {
            "total_riders": 1,
            "unknown": false,
          },
          "locations": {
            "origin": "Golden Arches International Hotel",
            "destination": "Beijing Capital International Airport",
          },
        },
        "arrival": {
          "flight_info": {
            "flight_number": "CA983",
            "destination": "Los Angeles (LAX)",
            "date": "2018-08-01",
            "time": "6:00pm",
            "share_allowed": true,
          },
          "passenger_info": {
            "total_riders": 1,
            "unknown": false,
          },
          "locations": {
            "origin": "Arrival Gate B, Tom Bradly Intl Terminal",
            "destination": "9229 Regents Road, La Jolla, CA",
          },
        },
      },
    };
  }

  componentDidMount() {
    document.body.classList.add('rider');
  }

  componentWillUnmount() {
    document.body.classList.remove('rider');
  }

  render() {

    if (this.state.has_trip === false) {
      return (
        <div className="dashboard-display">
          <RiderNav />
          <div className="container" id="dashboard_layout">
            <div className="vertical-middle">
              <h1>Hello {this.state.user_info_rider['nick_name']},</h1>
              <h2>Where is your next destination?</h2>
              <Link to="/rider/new_trip"><button className="dashboard-button" id="new_trip">Find My Next Rides</button></Link>
            </div>
          </div>
        </div>
      );
    }

    else {
      return (
        <div className="dashboard-display">
          <RiderNav />
          <div className="container" id="dashboard_layout">
            <div className="vertical-middle with-more-info" id="greet-user">
              <h1>Hello {this.state.user_info_rider['nick_name']},</h1>
              <h2>Your trip to {this.state.rider_trip_demo['arrival']['flight_info']['destination']} is good to go!</h2>
              <div className='dashboard-info flex-container'>
                <div className='arrival'>
                  <h3>Ride from {this.state.rider_trip_demo['arrival']['flight_info']['destination']}</h3>
                  <hr />
                  <div className='ride-info'>
                    <div className='ride-info-left'>
                      <button className='dashboard-button'>Ride Details</button>
                      <button className='dashboard-button'>Message Your Driver</button>
                      <button className='dashboard-button'>Departure Flight Info</button>
                    </div>
                    <div className='ride-info-right'>
                      <img id='arrival_status_complete' src={require('./icons/correct-32.png')} alt='checkmark' />
                    </div>
                  </div>
                </div>
                <div className='need-a-ride'>
                  <h3>Need a ride for your departure?</h3>
                  <a class='find-a-ride' href='./rider-new-trip-2.html'>Request now</a>
                </div>
                <div class='find-another'>
                  <a href='./rider-new-trip.html'>Find Rides for Another Trip</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default RiderHome;
