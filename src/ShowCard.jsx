import React, { Component } from "react";
import {string}  from "prop-types";

class ShowCard extends Component {
  render() {
    return (
      <div className="show-card">
        <img
          src={`/img/posters/${this.props.poster}`}
          alt={`${this.props.title} Show Poster`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>{this.props.year}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

ShowCard.propTypes = {
    poster: string,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  };

export default ShowCard;
