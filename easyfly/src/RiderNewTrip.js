import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RiderNav from './RiderNav'

import './css/trip.css';

class RiderNewTrip extends Component {

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
      step: 0, // Annotate the current step of adding a new trip. 0 as initial step
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

  nextStep = () => {
    this.setState((prevState) => {
      return {
        step: prevState.step + 1,
        user_info_rider: prevState.user_info_rider,
        rider_trip_demo: prevState.rider_trip_demo,
      }
    });
  }

  prevStep = () => {
    this.setState((prevState) => {
      return {
        step: prevState.step - 1,
        user_info_rider: prevState.user_info_rider,
        rider_trip_demo: prevState.rider_trip_demo,
      }
    });
  }

  componentDidMount() {
    document.body.classList.add('rider');
  }

  componentWillUnmount() {
    document.body.classList.remove('rider');
  }

  render() {
    if (this.state.step == 0) {
      return(
        <div>
          <RiderNav />
          <div className="container">
            <div className="vertical-middle">
              <h1 style={styles.h1_over_dark_bg}>Tell us about your trip</h1>
              <h2 style={styles.h2_over_dark_bg}>Are you looking for...</h2>
              <div className="choose-rides-for-d-a">
                <label className="checkbox-container">A ride for your departure (e.g. from your home to an airport)
                  <input type="checkbox" id="checkbox-departure"/>
                  <span className="checkmark"></span>
                </label>
                <hr/>
                <label className="checkbox-container">A ride after your arrival (e.g. from an airport to your destination)
                  <input type="checkbox" id="checkbox-arrival"/>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="next-bt">
                <button className="trip-button" id="next-btn" onClick={this.nextStep}>Next</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.step == 1) {
      return(
        <div>
          <RiderNav />
          <div className="container">
            <div className="vertical-middle">
              <h1 style={styles.h1_over_dark_bg}>A ride for your arrival</h1>
              <h2 style={styles.h2_over_dark_bg}>Tell us about your arrival information</h2>
              <div class="flex-container add-flight">
                <div class="f-n">
                  <label>Flight Number</label>
                  <input id="input-f-n" type="text" name="flight-number" value={this.state.rider_trip_demo['arrival']['flight_info']['flight_number']}/>
                </div>
                <div class="a-d">
                  <label>Arrival Date (in destination's timezone)</label>
                  <input id="input-date" type="date" name="arrival-date" value={this.state.rider_trip_demo['arrival']['flight_info']['date']}/>
                </div>
                <div class="a-t">
                  <label>Time</label>
                  <input id="input-time" type="time" name="arrival-time" value={this.state.rider_trip_demo['arrival']['flight_info']['time']}/>
                </div>
              </div>
              <div class="next-bt">
                <button class="trip-button" id="next-btn" onClick={this.nextStep}>Next</button>
              </div>
              <div class="footer">
                <p style={styles.p_over_dark_bg}>Flight info helps us to figure out your best pick up time and location for you instantly</p>
                <p style={styles.p_over_dark_bg}>Plus, your driver will be able to track your flight status</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.step == 2) {
      return(
        <div>
          <RiderNav />
          <div className="container">
            <div className="vertical-middle">
              <h1 style={styles.h1_over_dark_bg}>A ride for your arrival</h1>
              <h2 style={styles.h2_over_dark_bg}>Here is what we have found!</h2>
              <p style={styles.p_over_dark_bg}>You can edit any fields per your preference</p>
              <div className="details flex-container">
                <div className="flight-details">
                  <p id="flight-number">{this.state.rider_trip_demo['arrival']['flight_info']['flight_number']}</p>
                  <p id="airport">{this.state.rider_trip_demo['arrival']['flight_info']['destination']}</p>
                  <p id="time">{this.state.rider_trip_demo['arrival']['flight_info']['time']}</p>
                  <p id="date">{this.state.rider_trip_demo['arrival']['flight_info']['date']}</p>
                  <label class="checkbox-container">Allow paired driver to know my flight no.
                    <input id="check-share-allowed" type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <a onClick={this.prevStep}>Edit flight info</a>
                </div>
                <div class="party-details">
                  <p>Including you</p>
                  <p>How many persons will be riding?</p>
                  <input id="input-num" type="number" name="persons" value={this.state.rider_trip_demo['arrival']['passenger_info']['total_riders']} />
                  <label class="checkbox-container">Currently don't know *
                    <input id="check-unknown" type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="location-details">
                  <div class="pick-up">
                    <p>Meet your driver at</p>
                    <input id="input-origin" type="text" placeholder="Arrival Gate B, Tom Bradly Intl Terminal" />
                  </div>
                  <div class="drop-off">
                    <p>Ride destination</p>
                    <input id="input-destination" type="text" placeholder="9229 Regents Road, La Jolla, CA 92037" />
                  </div>
                </div>
              </div>
              <div class="footer">
                <p style={styles.p_over_dark_bg}>* You will have to confrim these info eventually in order to make a deal with a paired driver</p>
                <button id="next-btn" class="trip-button" onClick={this.nextStep}>Broadcast my request to drivers!</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else { // if (this.state.step == 3)
      return(
        <div>
          <RiderNav />
          <div className="container">
            <div className="vertical-middle">
            <h1 style={styles.h1_over_dark_bg}>A ride for your arrival</h1>
              <h2 style={styles.h2_over_dark_bg}>You are all set for now</h2>
              <p style={styles.p_over_dark_bg}>We will get drivers to contact you with their quotes!</p>
              <div className="details flex-container">
                <div className="flight-details">
                  <p id="flight-number">{this.state.rider_trip_demo['arrival']['flight_info']['flight_number']}</p>
                  <p id="airport">{this.state.rider_trip_demo['arrival']['flight_info']['destination']}</p>
                  <p id="time">{this.state.rider_trip_demo['arrival']['flight_info']['time']}</p>
                  <p id="date">{this.state.rider_trip_demo['arrival']['flight_info']['date']}</p>
                  <label class="checkbox-container">Allow paired driver to know my flight no.
                    <input id="check-share-allowed" type="checkbox" checked disabled />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="party-details">
                  <p>Including you</p>
                  <p>How many persons will be riding?</p>
                  <input id="input-num" type="number" name="persons" value={this.state.rider_trip_demo['arrival']['passenger_info']['total_riders']} disabled />
                  <label class="checkbox-container">Currently don't know *
                    <input id="check-unknown" type="checkbox" disabled />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="location-details">
                  <div class="pick-up">
                    <p>Meet your driver at</p>
                    <input id="input-origin" type="text" placeholder="Arrival Gate B, Tom Bradly Intl Terminal" disabled />
                  </div>
                  <div class="drop-off">
                    <p>Ride destination</p>
                    <input id="input-destination" type="text" placeholder="9229 Regents Road, La Jolla, CA 92037" disabled />
                  </div>
                </div>
              </div>
              <div class="footer">
                <Link to="/rider/home"><button id="next-btn" class="trip-button">Everything looks good!</button></Link>
                <br />
                <a onClick={this.prevStep}>I need to make some changes</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const styles = {
  h1_over_dark_bg: {
    fontSize: "400%",
    fontWeight: "700",
    textAlign: "left",
    lineHeight: "1.45",
    color: "white",
    textShadowColor: "#252525",
    textShadowOffset: {
      width: "1px",
      height: "1px",
    },
    textShadowRadius: "5px",
  },
  h2_over_dark_bg: {
    fontSize: "200%",
    fontWeight: "600",
    textAlign: "left",
    lineHeight: "1",
    color: "white",
    textShadowColor: "#252525",
    textShadowOffset: {
      width: "1px",
      height: "1px",
    },
    textShadowRadius: "5px",
  },
  p_over_dark_bg: {
    color: "white",
    textShadowColor: "#252525",
    textShadowOffset: {
      width: "1px",
      height: "1px",
    },
    textShadowRadius: "5px",
  },
}

export default RiderNewTrip;
