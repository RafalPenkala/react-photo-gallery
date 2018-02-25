import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react'

import './AboutView.css';
import land from './images/photo_2.jpg';
import face from './images/face_2.png';


class AboutView extends Component {
  render() {
    return (
    <div>
        <Link to="/"><p className="back-btn"><Icon name="angle left" />BACK</p></Link>   
      <div className="about-box">
       <Card>
        <Image src={land} fluid/>
        <Image src={face} size='small' circular className="about-circular"/>
        <Card.Content textAlign="left">
          <Card.Header>
            Matthew
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville. Integer eu nunc vulputate, condimentum erat a, accumsan elit. In sit amet ipsum id metus elementum tristique sit amet vitae enim. magna feugiat condimentum.<br/><br/>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </Card.Description>
        </Card.Content>
       </Card>
      </div>
    </div>
    );
  }
}

export default AboutView;