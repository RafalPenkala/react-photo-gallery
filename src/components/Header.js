import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'


import logo from './images/lotus_logo.svg';
import './App.css';

class Header extends Component {
render() {
  return (
       <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Input placeholder='Search by keyword' className="App-input" />
            <Button content='search' className="App-btn" />
          <p className="App-heading">
            Gallery
          </p>
        </div>
  );
}
}


export default Header;