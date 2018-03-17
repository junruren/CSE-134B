import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import DriverNav from './DriverNav'
import DriverSelectedTrip from './DriverSelectedTrip'
import './css/driver-trips.css'
import './css/dashboard.css'


class ConnectDriverSendQuote extends Component {

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
        driver_quote: props.driver_quote
      };
      this.handleInput = this.handleInput.bind(this);
  }
  
  componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }

  handleInput(event) {
      var inputValue = event.target.value;
      console.log(inputValue);
      this.setState({driver_quote: inputValue});
  }

  render() {

    const TextInput = () => (
      <div id="default-text-div">
        <h2>Say hi to {this.state.selected_trip["Nickname"]} (and give a quote!):</h2>
        <div className="send-message">
          <textarea name="message" rows="8" cols="80" id="offer-content" value={this.state.driver_quote} onChange={this.handleInput}>
          </textarea>
        </div>
      </div>
    );

    const Buttons = () => (
      <div className="horizontal-group">
        <Link to="/driver/new_requests"><button className="dashboard-button progress left">Back</button></Link>
        <Link to="/driver/quote_sent"><button className="dashboard-button progress" >Send</button></Link> 
      </div>
    )

    return (
      <div>
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

function mapStateToProps(state, ownProps) {
  return {
    driver_quote: state.driver_quote
  }
}

const DriverSendQuote = connect(mapStateToProps)(ConnectDriverSendQuote);

export default DriverSendQuote;