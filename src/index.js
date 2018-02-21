import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';
import App from './components/App';
import PhotosView from './components/PhotosView';
import AboutView from './components/AboutView';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render (
  <Router>
      <Route exact path="/" component={App}/>
      <Route path="photos" component={PhotosView}/>
      <Route path="about" component={AboutView}/>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
