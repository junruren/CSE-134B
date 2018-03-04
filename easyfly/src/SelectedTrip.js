import React, {Component} from 'react'
import TableHeader from './TableHeader'


class SelectedTrip extends Component {

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


  render() {

  	 const Body = () =>( 
          <tr className="trip_row">
            <td>{this.state.selected_trip["Name"]}</td>
            <td>{this.state.selected_trip["Total Riders"]}</td>
            <td>{this.state.selected_trip["Pick-up"]}</td>
            <td>{this.state.selected_trip["Destination"]}</td>
            <td>{this.state.selected_trip["Flight Number"]}</td>
            <td>{this.state.selected_trip["Arrival Time"]}</td>
            <td>{this.state.selected_trip["Nickname"]}</td>
            <td></td>
          </tr>
    );
  
  	return (
  		<div>
	  		<h2>Selected Ride Request: </h2>
	        <div className="results-table" id="selected-trip-render"> 
	          <table>
	            <TableHeader />
	            <tbody>
	              <Body />
	            </tbody>
	          </table>
	        </div> 
        </div>
  	);

  }

}

export default SelectedTrip;