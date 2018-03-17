import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import { saveQuote } from './actions/saveQuote'


import DriverNav from './DriverNav'
import DriverSelectedTrip from './DriverSelectedTrip'
import './css/driver-trips.css'
import './css/dashboard.css'


class ConnectDriverSendQuote extends Component {

  constructor(props) {
      super(props);
      this.state = {
        user: 'John',
        driver_selected_trip: Object.assign({}, props.driver_selected_trip),
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
      var inputValue = document.getElementById('offer-content').value;
      console.log(inputValue);
      this.props.saveQuote(inputValue);
      this.setState({driver_quote: inputValue});
  }

  render() {

    const TextInput = ({input}) => (
      <div id="default-text-div">
        <h2>Say hi to {this.state.driver_selected_trip["Nickname"]} (and give a quote!):</h2>
        <div className="send-message">
          <textarea name="message" rows="3" cols="80" id="offer-content">
          </textarea>
        </div>
      </div>
    );

    const Buttons = () => (
      <div className="horizontal-group">
        <Link to="/driver/new_requests"><button className="dashboard-button progress left">Back</button></Link>
        <Link to="/driver/quote_sent"><button className="dashboard-button progress" onClick={this.handleInput}>Send</button></Link> 
      </div>
    )

    return (
      <div>
      <DriverNav />
      <div className="container">
        <DriverSelectedTrip />
        <TextInput input={this.state.driver_quote}/>
        <Buttons />
      </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    driver_quote: state.driver_quote,
    driver_selected_trip: state.driver_selected_trip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveQuote: inputValue => dispatch(saveQuote(inputValue))
  };
};

const DriverSendQuote = connect(mapStateToProps, mapDispatchToProps)(ConnectDriverSendQuote);

export default DriverSendQuote;