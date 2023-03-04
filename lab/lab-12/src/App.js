import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
  //biến nhận data fetch từ firebase
  const [movies, setMovies] = useState([]);

  //hàm fetch data từ firebase
  const fetchMovies = async () => {
    const res = await fetch(
      "https://react-http-4806b-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
    );
    const data = await res.json();
    ////chuyển kết quả sang định dạng array/////
    const resultsArr = [];
    for (const key in data) {
      resultsArr.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
        releaseDate: data[key].releaseDate,
      });
    }
    //gán kết quả vào movies state
    setMovies(resultsArr);
  };
  return (
    <div className="App">
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </div>
  );
}

export default App;
