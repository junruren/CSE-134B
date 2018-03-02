import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Paths from './route'
import registerServiceWorker from './registerServiceWorker';

require('typeface-muli')

ReactDOM.render(<Paths />, document.getElementById('root'));
registerServiceWorker();
