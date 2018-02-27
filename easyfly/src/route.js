import { HashRouter, Route } from 'react-router-dom';

import React, { Component } from 'react'
import Home from './Home';
import DriverHome from './DriverHome'
import DriverNewRequests from './DriverNewRequests'

const Paths = () => (
    <HashRouter>
    	<div>
	    	<Route exact path="/" component={Home} />
	    	<Route path="/driver_home" component={DriverHome} />
	    	<Route path="/driver_new_requests" component={DriverNewRequests} />
   		</div>
   	</HashRouter>
 );

export default Paths;