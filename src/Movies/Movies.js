import React from "react";
import Movie from "./Movie";

function Movies(props) {
  return (
    <div>
      {props.film.map((el) => (
        <Movie el={el} />
      ))}
    </div>
  );
}

export default Movies;
