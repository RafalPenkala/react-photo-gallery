import React, { Component } from 'react';
import PhotosView from './PhotosView';
import AboutView from './AboutView';
import AlbumsView from './AlbumsView';
import Header from './Header';
import Footer from './Footer';
import {
  Route,
  Switch
} from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <div className="App-box">
          <div className="App-box__details">
            <Switch>
              <Route exact path="/" component={AlbumsView}/>
              <Route exact path="/photos" component={PhotosView}/>
              <Route exact path="/about" component={AboutView}/>
            </Switch>
          </div>
        </div>
        <Footer/>
        
      </div>
      
    );
  }
}

export default App;
