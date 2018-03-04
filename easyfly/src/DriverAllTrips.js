import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import DriverNav from './DriverNav'
import DriverTableHeader from './DriverTableHeader'
import './css/driver-trips.css'
import './css/dashboard.css'


class DriverAllTrips extends Component {

  constructor(props) {
    super(props);
    this.state = {   
      filtered: true,
      all_trips:[ 
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
      }, 
      {
        "Name": "Mariah Maclachlan",
        "Total Riders": 1,
        "Pick-up": "LAX",
        "Destination": "La Jolla",
        "Flight Number": "XZ3265",
        "Arrival Time": "2018-01-26 09:33",
        "Nickname": "Patata",
        "Status": "Confirmed"
      }, 
      {
        "Name": "Valerie Liberty",
        "Total Riders": 2,
        "Pick-up": "LAX",
        "Destination": "Irvine",
        "Flight Number": "SQ972",
        "Arrival Time": "2017-12-01 23:42",
        "Nickname": "Val",
        "Status": "Confirmed"
      },
      {
        "Name": "Person1",
        "Total Riders": 3,
        "Pick-up": "LAX",
        "Destination": "La Jolla",
        "Flight Number": "MU538",
        "Arrival Time": "2017-12-19 15:03",
        "Nickname": "1",
        "Status": "Finished"
      }, 
      {
        "Name": "Person2",
        "Total Riders": 2,
        "Pick-up": "SAN",
        "Destination": "Irvine",
        "Flight Number": "AA1270",
        "Arrival Time": "2017-12-25 05:25",
        "Nickname": "2",
        "Status": "Finished"
      }, 
      {
        "Name": "Person3",
        "Total Riders": 2,
        "Pick-up": "LAX",
        "Destination": "La Jolla",
        "Flight Number": "XZ3265",
        "Arrival Time": "2017-12-26 09:33",
        "Nickname": "3",
        "Status": "Finished"
      }, 
      {
        "Name": "Person4",
        "Total Riders": 2,
        "Pick-up": "LAX",
        "Destination": "Irvine",
        "Flight Number": "SQ972",
        "Arrival Time": "2017-12-01 23:42",
        "Nickname": "4",
        "Status": "Finished"
      }
    ],

    filtered_trips:[ 
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
      }, 
      {
        "Name": "Mariah Maclachlan",
        "Total Riders": 1,
        "Pick-up": "LAX",
        "Destination": "La Jolla",
        "Flight Number": "XZ3265",
        "Arrival Time": "2018-01-26 09:33",
        "Nickname": "Patata",
        "Status": "Confirmed"
      }, 
      {
        "Name": "Valerie Liberty",
        "Total Riders": 2,
        "Pick-up": "LAX",
        "Destination": "Irvine",
        "Flight Number": "SQ972",
        "Arrival Time": "2017-12-01 23:42",
        "Nickname": "Val",
        "Status": "Confirmed"
      }
    ]

  };

  this.handleFilter = this.handleFilter.bind(this);

}

  handleFilter(event) {
    var button = document.getElementById("filter-upcoming-button");
    var trips_to_display = this.state.all_trips;
    if (button.checked) {
    trips_to_display = [];
    for(var i = 0; i<this.state.all_trips.length; i++) {
      if(this.state.all_trips[i]["Status"]!="Finished") {
        trips_to_display.push(this.state.all_trips[i]);
      }
    }
    this.setState({ filtered_trips: trips_to_display });
    this.setState({ filtered: true });
  }
   else {
     this.setState({ filtered_trips: this.state.all_trips });
     this.setState({ filtered: false });
   }


  }


  componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }


  render() {

    const FilterBar = () => (
      <div className="filters">
        <div className="area-filter">
          <input type="checkbox" /><label>Area</label>
          <select>
            <option value="San Diego - Los Angeles" selected >San Diego - Los Angeles</option>
          </select>
        </div>
        <div className="status-filter">
          <input type="checkbox" id="filter-upcoming-button" onClick={this.handleFilter} checked={this.state.filtered}/><label>Upcoming</label> 
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
            <td>{trip["Status"]}</td>
            <td>
              <Link to="/chat"><button className="dashboard-button message">Message</button></Link>
            </td>
          </tr>
      )
    ));

    return (
      <div>
      <DriverNav />
      <div className="container">
        <h2>Here are all your pickups:</h2>
        <FilterBar />
        <div className="results-table" id="available-trips-render"> 
          <table>
            <DriverTableHeader />
            <tbody>
              <Body />
            </tbody>
          </table>
        </div> 
      </div>
      </div>
    );
  }

}

export default DriverAllTrips;