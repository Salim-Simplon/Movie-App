import React, { Component } from "react";

export class Favoris extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="titre">Movies Favoris</h2>
        </div>
        <div className="top">
          {this.props.films.favorites.map((item) => (
            <div className="section">
              <img className="photo2" src={item.image} alt="moviepic" />
              <h3>{item.name}</h3>
              <div>{item.role}</div>
              <div className="rating2">
                <a href="#7" title="Avis du public">
                  {item.avis}
                </a>
              </div>
              <p>
                <a className="voir" href={item.info}>
                  [Voir]
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Favoris;
