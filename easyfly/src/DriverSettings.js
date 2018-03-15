import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom';

import DriverNav from './DriverNav'
import './css/settings.css'

class DriverSettings extends Component {


	render() {
		return (
		<BrowserRouter>
			<DriverNav />

			<div className="settings-container">
      		<div className="settings-vertical-middle">
		        <h1>Settings</h1>
		        <div className="personal-info settings-flex-container">
		          <div className="settings-info-details">
		            <label>First Name:</label>
		            <input type="text" name="firstname" value="John"  />
		            <br />
		            <label>Nick Name:</label>
		            <input type="text" name="nickname" value=""  />
		            <br />
		            <label>Last Name:</label>
		            <input type="text" name="lastname" value="Smith"  />
		            <br />
		            <label>Phone Number:</label>
		            <input type="number" name="phone-number" value="6261234567"  />
		            <br />
		            <label>Email Address:</label>
		            <input type="email" name="email" value="jsmith@example.com"  />
		          </div>
		          <div className="airports">
		            <p>Home Base Airport(s):</p>
		            <ul>
		              <li>Los Angeles Int'l (LAX)</li>
		              <li>San Diego Int'l (SAN)</li>
		              <li>Long Beach (LGB)</li>
		            </ul>

		          </div>
		          <div className="setting-buttons">
		            <button className="indv-settings-button">Edit</button>
		            <button className="indv-settings-button">Reset Password</button>
		          </div>
		        </div>
      		</div>
    		</div>

		</BrowserRouter>
		);
	}

}

export default DriverSettings;