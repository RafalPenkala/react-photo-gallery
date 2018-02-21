import React, { Component } from 'react';
import PhotosView from './PhotosView';
import logo from './lotus_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
       
        <div className="gallery-container">
        <p className="App-intro">
          GALLERY
        </p>
          {/* <GalleryView/> */}
        </div>

        <div className="footer">
          <p>Copyrighs. All rights reserved.</p>
        </div>
      </div>
      
    );
  }
}

export default App;
