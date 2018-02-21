import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class PhotosView extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/about">Photos of some guys and girls</Link>
        </h1>
      </div>
    );
  }
}

export default PhotosView;
