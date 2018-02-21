import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class AboutView extends Component {
  constructor() {
    super();
    this.state = {
    albums : [],
    };
  }
  
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => { 
      return response.json();
    }).then(data => { 
      let albums = data.map((album) => {
      return(
        <div key={album.userId}>
        {/* <div src={album.userId}></div> */}
        </div>

      )
    })

    this.setState({albums : data});
    console.log("wyświetl stan", this.state.albums)
    })
}


 

  render() {
    return (
      <div>
        <h1><Link to="photos">About some guys and girls view.</Link></h1>
        {/* <div>{this.state.albums}</div> */}
      </div>
    );
  }
}


export default AboutView;