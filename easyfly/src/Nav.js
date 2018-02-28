import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/dashboard.css';

class Nav extends Component {
	state = {
		user: "driver"
	};

	render() {
		return (
			<ul className="navbar">
      			<li><Link to="/">Sign Out</Link></li>
      			<li className="dropdown">
	        		<a href="javascript:void(0)" className="dropbtn">Account</a>
	        		<div className="dropdown-content">
	          			<Link to={this.state.user + "_all_trips"}>My Trips</Link>
	          			<Link to={this.state.user + "_settings"}>Settings</Link>
	        		</div>
      			</li>
      			<li><Link to="">Notification</Link></li>
    		</ul>
		);
	}
}

export default Nav;