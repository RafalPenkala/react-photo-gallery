import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './AlbumsView.css'
import img1 from './images/photo_4.jpg'
import img2 from './images/photo_5.jpg'
import img3 from './images/photo_6.jpg'
import img4 from './images/photo_7.jpg'
import img5 from './images/photo_8.jpg'
import img6 from './images/photo_9.jpg'
import img7 from './images/photo_10.jpg'
import img8 from './images/photo_3.jpg'


class AlbumsView extends Component {
render() {
  return (
      <div className="albums-box">
      <Card.Group centered stackable doubling itemsPerRow={4}>

        <Card>
          <Link to='./photos'>
            <Image src={img1} />
          </Link>
          <Card.Content>
            <Card.Header>"Panoramas"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img2} />
          </Link>
          <Card.Content>
            <Card.Header>"Still life"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img3} />
          </Link>
          <Card.Content>
            <Card.Header>"Cities"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img8} />
          </Link>
          <Card.Content>
            <Card.Header>"Gadgets"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img5} />
          </Link>
          <Card.Content>
            <Card.Header>"Landscapes"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img6} />
          </Link>
          <Card.Content>
            <Card.Header>"Travels"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>

        <Card>
          <Link to='./photos'>
            <Image src={img7} />
          </Link>
          <Card.Content>
            <Card.Header>"Urban exploration"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>


        <Card>
          <Link to='./photos'>
            <Image src={img4} />
          </Link>
          <Card.Content>
            <Card.Header>"Nature"</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to='./about'>
              Author's profile
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
  );
}
}

export default AlbumsView;