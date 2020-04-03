import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const {Title,Director,ReleaseDate} = this.props.movieData;
    return (
        <div>
          <p>{Title}</p>
          <p>{Director}</p>
          <p>{ReleaseDate}</p>
        </div>
    );
  }
}

export default Movie;