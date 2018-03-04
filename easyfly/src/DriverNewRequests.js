import React, { Component } from 'react'
import DriverNav from './DriverNav'
import DriverFilterBar from './DriverFilterBar'
import DriverTableHeader from './DriverTableHeader'
import './css/driver-trips.css'
import './css/dashboard.css'


class DriverNewRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
      ]
    };

  }

   componentDidMount() {
    document.body.classList.add('driver');
  }

  componentWillUnmount() {
    document.body.classList.remove('driver');
  }



	render() {

    // page.push(tableHeader);

    const Body = () =>( this.state.new_trips.map((trip) => (
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
              <input type="checkbox" className="select_checkbox" />
            </td>
          </tr>
      )
    ));

    const ProgressButtons = () => (
      <div className="horizontal-group">
        <button className="button progress left" onclick="location.href='driver-dashboard-2.html'">
          Back to Dashboard</button>
        <button className="button progress right" onclick="location.href='driver-send-quote.html'">
          Next</button>
      </div>
    )

    return (
      <div className="container">
        <DriverNav />
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
    );
  }

}

export default DriverNewRequests;