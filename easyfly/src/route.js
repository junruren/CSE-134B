import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'
import Home from './Home';
import {DriverLogin, RiderLogin} from './Login';
import {DriverSignup, RiderSignup} from './Signup';
import DriverHome from './DriverHome'
import DriverNewRequests from './DriverNewRequests'
import DriverAllTrips from './DriverAllTrips'
import DriverSendQuote from './DriverSendQuote'
import DriverQuoteSent from './DriverQuoteSent'

const Paths = () => (
  <BrowserRouter>
  	<div>
    	<Route exact path="/" component={Home} />
    	<Route path="/driver_home" component={DriverHome} />
    	<Route path="/driver_new_requests" component={DriverNewRequests} />
    	<Route path="/driver_all_trips" component={DriverAllTrips} />
      <Route path="/driver_send_quote" component={DriverSendQuote} />
      <Route path="/driver_quote_sent" component={DriverQuoteSent} />

      <Route path="/driver/login" component={DriverLogin}/>
      <Route path="/driver/signup" component={DriverSignup}/>
      <Route path="/rider/login" component={RiderLogin}/>
      <Route path="/rider/signup" component={RiderSignup}/>
 		</div>
 	</BrowserRouter>
);

export default Paths;
