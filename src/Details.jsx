import React, { Component } from "react";

class Details extends Component {
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    return (
      <div className="details">
        <header>
          <h1>svideo</h1>
        </header>
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img
            src={`/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Details;
