import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

import './AboutView.css';
import budda from './images/photo_3.jpg';
import face from './images/face_2.png';


class AboutView extends Component {
//   constructor() {
//     super();
//     this.state = {
//     albums : [],
//     };
//   }
  
//   componentDidMount () {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => { 
//       return response.json();
//     }).then(data => { 
//       let albums = data.map((album) => {
//       return(
//         <div key={album.userId}>
//         {/* <div src={album.userId}></div> */}
//         </div>

//       )
//     })

//     this.setState({albums : data});
//     console.log("wyświetl stan", this.state.albums)
//     })
// }


 
  render() {
    return (
      <div className="about-box">
       <Card>
        <Image src={budda}/>
        <Image src={face} size='small' circular className="about-circular"/>
        <Card.Content>
          <Card.Header>
            Matthew
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville. Integer eu nunc vulputate, condimentum erat a, accumsan elit. In sit amet ipsum id metus elementum tristique sit amet vitae enim. magna feugiat condimentum.<br/>
          <a href="https://www.behance.net/">Portfolio</a>
          </Card.Description>
        </Card.Content>
       </Card>
        {/* <div>{this.state.albums}</div> */}
      </div>
    );
  }
}


export default AboutView;