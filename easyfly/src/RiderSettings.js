import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import RiderNav from './RiderNav'
import './css/settings.css'

class RiderSettings extends Component {


	render() {
		return (
		<div>
			<RiderNav />

			<div className="settings-container">
      		<div className="settings-vertical-middle">
		        <h1>Settings</h1>
		        <div className="personal-info settings-flex-container">
		          <div className="settings-info-details">
		            <label>First Name:</label>
		            <input type="text" name="firstname" value="Scarlett"  />
		            <label>Nick Name:</label>
		            <input type="text" name="nickname" value="Scarlett"  />
		            <label>Last Name:</label>
		            <input type="text" name="lastname" value="Honda"  />
		            <label>Phone Number:</label>
		            <input type="number" name="phone-number" value="8581234567"  />
		            <label>Email Address:</label>
		            <input type="email" name="email" value="scarlett_honda@example.com"  />
		          </div>
		          
		          <div className="setting-buttons">
		            <button className="indv-settings-button">Edit</button>
		            <button className="indv-settings-button">Reset Password</button>
		          </div>
		        </div>
      		</div>
    		</div>

		</div>
		);
	}

}

export default RiderSettings;