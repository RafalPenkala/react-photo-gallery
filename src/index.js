import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
  <Router>

    
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
