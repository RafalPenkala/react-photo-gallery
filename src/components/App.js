import React, { Component } from 'react';
import PhotosView from './PhotosView';
import AboutView from './AboutView';
import AlbumsView from './AlbumsView';


import logo from './lotus_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-heading">
            Gallery
          </p>
        </div>
        
        <div className="App-container">
          
          <AlbumsView/>
        </div>

        <div className="App-footer">
          <p>Copyrights © 2018. LOTUS Photo Gallery. All rights reserved.</p>
        </div>
      </div>
      
    );
  }
}

export default App;
