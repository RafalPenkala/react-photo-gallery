import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './components/App';
import PhotosView from './components/PhotosView';
import AboutView from './components/AboutView';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render ((
  <Router>
    <div>
      <App/>
    </div>
  </Router>
), 
document.getElementById('root'));

registerServiceWorker();
