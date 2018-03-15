import React, {Component} from 'react'
import DriverTableHeader from './DriverTableHeader'
import { connect } from 'react-redux';



class ConnectDriverSelectedTrip extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      user: 'John',
	      driver_selected_trip: Object.assign({}, props.driver_selected_trip)
	    };
  }

  render() {

  	 const Body = () =>( 
          <tr className="trip_row">
            <td>{this.state.driver_selected_trip["Name"]}</td>
            <td>{this.state.driver_selected_trip["Total Riders"]}</td>
            <td>{this.state.driver_selected_trip["Pick-up"]}</td>
            <td>{this.state.driver_selected_trip["Destination"]}</td>
            <td>{this.state.driver_selected_trip["Flight Number"]}</td>
            <td>{this.state.driver_selected_trip["Arrival Time"]}</td>
            <td>{this.state.driver_selected_trip["Nickname"]}</td>
            <td></td>
          </tr>
    );

  	console.log("this.props");
  	console.log(this.props);

  	console.log("this.state");
  	console.log(this.state);
  
  	return (
  		<div>
	  		<h2>Selected Ride Request: </h2>
	        <div className="results-table" id="selected-trip-render"> 
	          <table>
	            <DriverTableHeader />
	            <tbody>
	              <Body />
	            </tbody>
	          </table>
	        </div> 
        </div>
  	);

  }

}

function mapStateToProps(state, ownProps) {
  return {
    driver_selected_trip: state.driver_selected_trip
  }
}


const DriverSelectedTrip = connect(mapStateToProps)(ConnectDriverSelectedTrip);


export default DriverSelectedTrip;