import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import './App.css';
import beh from './images/beh.svg';
import twit from './images/twit.svg';
import face from './images/face.svg';
import pint from './images/pint.svg';



class Footer extends Component {
render() {
  return (
    <div className="App-footer">
    <div className="App-footer__icons">
    <img src={beh} alt="behance" className="icons__img"/>
    <img src={twit} alt="twitter" className="icons__img"/>
    <img src={face} alt="facebook" className="icons__img"/>
    <img src={pint} alt="pinterest" className="icons__img"/>

      </div>
    <p>Copyrights © 2018. Lotus Photo Gallery. All rights reserved.</p>
    </div>
  );
}
}


export default Footer;

