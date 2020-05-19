import React from "react";
import "./Link.css";

/*
const list = ["Accueil", "Equipe", "A propos", "Contact"];

function Link() {
  return (
    <span className="link">
      {list.map((el) => (
        <a href="#">{el}</a>
      ))}
    </span>
  );
}
*/

function Link() {
  return (
    <div className="link">
      <a href="/" id="first">
        Accueil
      </a>
      <a href="/sign">Insription</a>
      <a href="/films">Nos Films</a>
      <a href="/films#favoris">Favoris</a>
    </div>
  );
}

export default Link;
