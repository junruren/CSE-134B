import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class DriverNav extends Component {
	state = {
		user: "driver"
	};

	render() {
		return (
			<ul className="navbar">
      			<li><Link to={`/`}>Sign Out</Link></li>
      			<li className="dropdown">
	        		<a className="dropbtn">Account</a>
	        		<div className="dropdown-content">
	          			<Link to={"/" + this.state.user + "/all_trips"}>My Trips</Link>
	          			<Link to={"/" + this.state.user + "/settings"}>Settings</Link>
	        		</div>
      			</li>
      			<li><Link to={'/'}>Notification</Link></li>
      			<li><Link to={'/driver/home'}>Home</Link></li>
    		</ul>
		);
	}
}

export default DriverNav;