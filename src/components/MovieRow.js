import React, { Component } from 'react';
import Movie from './Movie';

class MovieRow extends Component {
  render() {
    let rowData = this.props.rowData;
    let movies = rowData.map((key, index) => {
        return (
            <Movie movieData={rowData[index]} key={index} />
        );
    })
    return (
        <div className="row">{movies}</div>
    );
  }
}

export default MovieRow;