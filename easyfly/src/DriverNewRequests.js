import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveTrip } from './actions/saveTrip'

import DriverNav from './DriverNav'
import DriverTableHeader from './DriverTableHeader'
import './css/driver-trips.css'
import './css/dashboard.css'

const mapDispatchToProps = dispatch => {
  return {
    saveTrip: selected_trip => dispatch(saveTrip(selected_trip))
  };
};

class ConnectDriverNewRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      select: false,
      capacityInput: 4,
      new_trips: [ 
        {
          "Name": "Giacomo Guilizzoni",
          "Total Riders": 3,
          "Pick-up": "LAX",
          "Destination": "La Jolla",
          "Flight Number": "MU538",
          "Arrival Time": "2018-01-19 15:03",
          "Nickname": "Peldi",
          "Status": "Driver Arrival"
        }, 
        {
          "Name": "Marco Botton",
          "Total Riders": 2,
          "Pick-up": "SAN",
          "Destination": "Irvine",
          "Flight Number": "AA1270",
          "Arrival Time": "2018-01-25 05:25",
          "Nickname": "Mark",
          "Status": "Confirmed"
        }
      ],
      filtered_trips: [ 
        {
          "Name": "Giacomo Guilizzoni",
          "Total Riders": 3,
          "Pick-up": "LAX",
          "Destination": "La Jolla",
          "Flight Number": "MU538",
          "Arrival Time": "2018-01-19 15:03",
          "Nickname": "Peldi",
          "Status": "Driver Arrival"
        }, 
        {
          "Name": "Marco Botton",
          "Total Riders": 2,
          "Pick-up": "SAN",
          "Destination": "Irvine",
          "Flight Number": "AA1270",
          "Arrival Time": "2018-01-25 05:25",
          "Nickname": "Mark",
          "Status": "Confirmed"
        }
      ]
    };

    this.handleCapacityFilter = this.handleCapacityFilter.bind(this);

  }

   componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }


  handleCapacityFilter(event) {
    var inputValue = event.target.value;
    console.log("calling filter" + inputValue);
    var trips_to_display = [];
    for(var i = 0; i<this.state.new_trips.length; i++) {
      if(this.state.new_trips[i]["Total Riders"]<=inputValue) {
        trips_to_display.push(this.state.new_trips[i]);
      }
    }
    this.setState({filtered_trips: trips_to_display}); 
    this.setState({capacityInput: inputValue});
  }


  handleSelectTrip(event) {
    event.preventDefault();
    var chosen_trip = event.target.getAttribute("id"); 
  }


	render() {

    const DriverFilterBar = () => (
      <div className="filters">
        <div className="area-filter">
          <input type="checkbox" /><label>Area</label>
          <select>
            <option value="San Diego - Los Angeles" selected >San Diego - Los Angeles</option>
          </select>
        </div>
        <div className="capacity-filter">
          <input type="checkbox" id="capacity-checkbox" defaultChecked/><label>Capacity: max </label>
          <input type="number" id="capacity-input" onChange={this.handleCapacityFilter} value={this.state.capacityInput}/>
        </div>
      </div>
    );

    const Body = () =>( this.state.filtered_trips.map((trip) => (
          <tr className="trip_row">
            <td>{trip["Name"]}</td>
            <td>{trip["Total Riders"]}</td>
            <td>{trip["Pick-up"]}</td>
            <td>{trip["Destination"]}</td>
            <td>{trip["Flight Number"]}</td>
            <td>{trip["Arrival Time"]}</td>
            <td>{trip["Nickname"]}</td>
            <td></td>
            <td>
              <input 
                type="checkbox" 
                className="select_checkbox" 
                id={trip["Name"]}
                onChange={this.handleSelectTrip}
              />
            </td>
          </tr>
      )
    ));

    const ProgressButtons = () => (
      <div className="horizontal-group">
        <Link to="/driver/home"><button className="dashboard-button progress left">Back to Dashboard</button></Link>
        <Link to="/driver/send_quote"><button className="dashboard-button progress right">Next</button></Link>
      </div>
    )

    return (
      <div>
      <DriverNav />
      <div className="container">
        <div>
          <h2>Results based on your location settings: </h2>
          <DriverFilterBar />
        </div>
        <div className="results-table" id="all-trips-render"> 
          <table>
            <DriverTableHeader />
            <tbody>
              <Body />
            </tbody>
          </table>
        </div> 
        <ProgressButtons />
      </div>
      </div>
    );
  }

}

const DriverNewRequests = connect(null, mapDispatchToProps)(ConnectDriverNewRequests);

export default DriverNewRequests;


