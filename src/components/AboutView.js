import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

import './AboutView.css';
import budda from './images/budda.jpg';


class AboutView extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   albums : [],
  //   };
  // }
  
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
        <Image src={budda} />
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
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
       </Card>
        {/* <div>{this.state.albums}</div> */}
      </div>
    );
  }
}


export default AboutView;