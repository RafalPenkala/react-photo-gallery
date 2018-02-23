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
    <a href="https://www.behance.net/" target="_blank"><img src={beh} alt="behance" className="icons__img"/></a>
    <a href="https://twitter.com/" target="_blank"><img src={twit} alt="twitter" className="icons__img"/></a>
    <a href="https://www.facebook.com/" target="_blank"><img src={face} alt="facebook" className="icons__img"/></a>
    <a href="https://no.pinterest.com/" target="_blank"><img src={pint} alt="pinterest" className="icons__img"/></a>

      </div>
    <p>Copyrights © 2018. Lotus Photo Gallery. All rights reserved.</p>
    </div>
  );
}
}


export default Footer;

