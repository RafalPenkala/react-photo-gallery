import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './AlbumsView.css'
import img1 from './images/photo_4.jpg'
import img2 from './images/photo_5.jpg'

import img6 from './images/photo_9.jpg'
import img3 from './images/photo_6.jpg'
import img4 from './images/photo_7.jpg'
import img5 from './images/photo_8.jpg'



class AlbumsView extends Component {
render() {
  return (
      <div className="albums-box">
      <Card.Group centered itemsPerRow={3}>
        <Card>
          <Link to='./photos'>
            <Image src={img1} />
          </Link>
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              About me
            </Link>
          </Card.Content>
        </Card>

             <Card>
          <Link to='./photos'>
            <Image src={img2} />
          </Link>
          <Card.Content>
            <Card.Header>Jane Watson</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              About me
            </Link>
          </Card.Content>
        </Card>

             <Card>
          <Link to='./photos'>
            <Image src={img3} />
          </Link>
          <Card.Content>
            <Card.Header>Kate Willows</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              About me
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img4} />
          </Link>
          <Card.Content>
            <Card.Header>Mike Mayerson</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              About me
            </Link>
          </Card.Content>
        </Card>

             <Card>
          <Link to='./photos'>
            <Image src={img5} />
          </Link>
          <Card.Content>
            <Card.Header>Tim Dunck</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              About me
            </Link>
          </Card.Content>
        </Card>

             <Card>
          <Link to='./photos'>
            <Image src={img6} />
          </Link>
          <Card.Content>
            <Card.Header>Elisa Thomson</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              <Icon name="user circle" />
            </Link>
          </Card.Content>
        </Card>

        
      </Card.Group>
      </div>
  );
}
}


export default AlbumsView;