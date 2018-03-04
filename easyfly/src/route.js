import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import Home from './Home';
import { DriverLogin, RiderLogin } from './Login';
import { DriverSignup, RiderSignup } from './Signup';
import DriverHome from './DriverHome';
import DriverNewRequests from './DriverNewRequests';
import DriverAllTrips from './DriverAllTrips';
import DriverSendQuote from './DriverSendQuote';
import DriverQuoteSent from './DriverQuoteSent';
import DriverSettings from './DriverSettings';
import RiderHome from './RiderHome';
import RiderNewTrip from './RiderNewTrip';
import RiderSettings from './RiderSettings';
import Chat from './Chat';
import ResetPassword from './ResetPassword';

const Paths = () => (
  <BrowserRouter>
  	<div>
    	<Route exact path="/" component={Home} />
    	<Route path="/driver/home" component={DriverHome} />
    	<Route path="/driver/new_requests" component={DriverNewRequests} />
    	<Route path="/driver/all_trips" component={DriverAllTrips} />
      <Route path="/driver/send_quote" component={DriverSendQuote} />
      <Route path="/driver/quote_sent" component={DriverQuoteSent} />
      <Route path="/driver/settings" component={DriverSettings} />
      <Route path="/driver/login" component={DriverLogin}/>
      <Route path="/driver/signup" component={DriverSignup}/>
      <Route path="/rider/login" component={RiderLogin}/>
      <Route path="/rider/signup" component={RiderSignup}/>
      <Route path="/rider/home" component={RiderHome}/>
      <Route path="/rider/new_trip" component={RiderNewTrip}/>
      <Route path="/rider/settings" component={RiderSettings}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/reset_password" component={ResetPassword}/>
 		</div>
 	</BrowserRouter>
);

export default Paths;
