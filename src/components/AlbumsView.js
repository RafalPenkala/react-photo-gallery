import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './AlbumsView.css'
import logo from './images/photo_4.jpg'

class AlbumsView extends Component {
render() {
  return (
      <div className="albums-box">
      <Card.Group centered itemsPerRow={4}>
        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header><span className="albums-name">Daniel Morris</span></Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Check my profile
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
  );
}
}


export default AlbumsView;