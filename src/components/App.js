import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'
import PhotosView from './PhotosView';
import AboutView from './AboutView';
import AlbumsView from './AlbumsView';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



import logo from './images/lotus_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Input placeholder='Search by keyword' className="App-input" />
            <Button content='search' className="App-btn" />
          <p className="App-heading">
            Gallery
          </p>
        </div>
        
        <div className="App-box">
          <div className="App-box__details">
            <Switch>
              <Route exact path="/" component={AlbumsView}/>
              <Route exact path="/photos" component={PhotosView}/>
              <Route exact path="/about" component={AboutView}/>
            </Switch>
          </div>
        </div>

        <div className="App-footer">
          <p>Copyrights © 2018. Lotus Photo Gallery. All rights reserved.</p>
        </div>
      </div>
      
    );
  }
}

export default App;
