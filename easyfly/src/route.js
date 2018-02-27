import { HashRouter, Route } from 'react-router-dom';

import React, { Component } from 'react'
import Home from './Home';
import DriverHome from './DriverHome'

class Paths extends Component {
	render() {
    	return (
			<HashRouter>
			    <Route path="/" component={Home}>
			    	<Route path="/driver_home" component={DriverHome}/>
			    </Route> 
   			</HashRouter>
    	);
	}
}

export default Paths;
