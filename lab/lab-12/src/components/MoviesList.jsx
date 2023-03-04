import React from "react";
import Movie from "./Movie";
import styles from "./MoviesList.module.css";

function MoviesList(props) {
  return (
    <ul className={styles["movies-list"]}>
      {props.movies.map((item) => (
        <li key={item.id}>
          <Movie movie={item} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
