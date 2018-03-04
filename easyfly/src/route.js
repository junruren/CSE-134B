import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import Home from './Home';
import {DriverLogin, RiderLogin} from './Login';
import {DriverSignup, RiderSignup} from './Signup';
import DriverHome from './DriverHome';
import DriverNewRequests from './DriverNewRequests';
import DriverAllTrips from './DriverAllTrips';
import Chat from './Chat';

const Paths = () => (
  <BrowserRouter>
  	<div>
    	<Route exact path="/" component={Home} />
    	<Route path="/driver_home" component={DriverHome} />
    	<Route path="/driver_new_requests" component={DriverNewRequests} />
    	<Route path="/driver_all_trips" component={DriverAllTrips} />
      <Route path="/driver/login" component={DriverLogin}/>
      <Route path="/driver/signup" component={DriverSignup}/>
      <Route path="/rider/login" component={RiderLogin}/>
      <Route path="/rider/signup" component={RiderSignup}/>
      <Route path="/chat" component={Chat}/>
 		</div>
 	</BrowserRouter>
);

export default Paths;
