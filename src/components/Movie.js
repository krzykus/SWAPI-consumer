import React, { Component } from 'react';
import './Movie.css'
class Movie extends Component {
  render() {
    const {Title,Director,ReleaseDate} = this.props.movieData;
    return (
        <div className="card one-half column">
          <header className="card-container blue-background">
            <h1>{Title}</h1>
          </header>
          <div className="card-container">
            <p>{Director}</p>
          </div>
          <footer className="card-container blue-background">
            <h5>{ReleaseDate}</h5>
          </footer>
        </div>
    );
  }
}

export default Movie;