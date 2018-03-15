import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Paths from './route'
import configureStore from './store/configureStore';


require('typeface-muli')

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Paths />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
