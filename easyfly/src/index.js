import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'

import './index.css';
import Home from './Home';
import Paths from './route'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Paths />, document.getElementById('root'));
registerServiceWorker();
