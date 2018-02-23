import React, { Component } from 'react'
import { Button, Input, Popup } from 'semantic-ui-react'


import logo from './images/lotus_logo.svg';
import './App.css';

class Header extends Component {
render() {
  return (
       <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Popup className="App-input__popup"
            trigger={<Input placeholder='Search by keyword' className="App-input" />}
            content='Enter "Spain" or "Peter" to find your album by keyword'
            on='hover'
          />
            
            <Button content='search' className="App-btn" />
        </div>
  );
}
}


export default Header;