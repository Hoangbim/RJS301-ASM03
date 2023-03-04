import React, { useState } from "react";
import styles from "./AddMovie.module.css";

function AddMovie() {
  //biến nhận info từ input
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const [error, setError] = useState(false);

  //////các hàm kiểm soát các trường input////////
  const titleInputHandler = (e) => {
    setMovieInfo((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const openTextInputHandler = (e) => {
    setMovieInfo((prev) => {
      return { ...prev, openingText: e.target.value };
    });
  };
  const dateInputHandler = (e) => {
    setMovieInfo((prev) => {
      return { ...prev, releaseDate: e.target.value };
    });
  };

  //hàm post data lên firebase
  const sendToFireBase = async (movie) => {
    const res = await fetch(
      "https://react-http-4806b-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  //submit form handler
  const addMovieHandler = (e) => {
    e.preventDefault();
    if (!movieInfo.title) {
      setError(() => true);
      return;
    }
    sendToFireBase(movieInfo);
    setError(false);
    setMovieInfo({
      title: "",
      openingText: "",
      releaseDate: "",
    });
    console.log(movieInfo);
  };

  return (
    <form onSubmit={addMovieHandler} className={styles["control"]}>
      <label>Title</label>
      <input type="text" onChange={titleInputHandler} value={movieInfo.title} />
      {error && <p>Please type movie title!</p>}
      <label>Openning Text</label>
      <input
        type="text"
        className={styles["opening-text"]}
        onChange={openTextInputHandler}
        value={movieInfo.openingText}
      />
      <label>Release Date</label>
      <input
        type="text"
        onChange={dateInputHandler}
        value={movieInfo.releaseDate}
      />
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
