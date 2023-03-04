import React from "react";
import styles from "./Movie.module.css";

function Movie(props) {
  return (
    <div className={styles.movie}>
      <h2>{props.movie.title}</h2>
      <h3>{props.movie.openingText}</h3>
      <h3>{props.movie.releaseDate}</h3>
    </div>
  );
}

export default Movie;
