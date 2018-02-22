import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './AlbumsView.css'
import logo from './lotus_logo.svg'

const items = [
  {
    header: 'Tim Robbins',
    content: 'Check me 1',
  },
  {
    header: 'Mindy Hu',
    content: 'Check me 2',
  },
  {
    header: 'Boris Moricki',
    content: 'Check me 3',
  },
  {
    header: 'Tim Novak',
    content: 'Check me 4',
  },
]

class AlbumsView extends Component {
render() {
  return (
    <div className="albums">
      <div className="albums__box">
      <Card.Group centered items={items} itemsPerRow={4}>
        <Card>
          <Link to='./photos'>
            <Image src={logo} />
          </Link>
          
          <Card.Content>
            <Card.Header>Daniel Morris</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
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
              <Icon name='user' />
              Check profile
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
      </div>
  );
}
}


export default AlbumsView;