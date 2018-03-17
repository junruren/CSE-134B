import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import DriverNav from './DriverNav'
import DriverSelectedTrip from './DriverSelectedTrip'
import './css/driver-trips.css'
import './css/dashboard.css'


class ConnectDriverQuoteSent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        user: 'John',
        driver_selected_trip: Object.assign({}, props.driver_selected_trip),
        driver_quote: props.driver_quote
      };
  }
  
  componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }

  render() {

    const SentText = () => (
      <div className="confirm-message" id="quote-sent"> {this.state.driver_quote} </div>
    );

    const Buttons = () => (
      <div className="horizontal-group">
        <Link to="/chat"><button className="dashboard-button progress">View In Chat</button></Link>
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

function mapStateToProps(state, ownProps) {
  return {
    driver_selected_trip: state.driver_selected_trip,
    driver_quote: state.driver_quote
  }
}



const DriverQuoteSent = connect(mapStateToProps)(ConnectDriverQuoteSent);

export default DriverQuoteSent;