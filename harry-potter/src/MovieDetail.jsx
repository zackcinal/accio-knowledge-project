import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import "./MovieDetail.css";
import Tabs2 from "./Tabs2";

function MovieDetail() {
  const [movie, setBook] = useState({});

  const { movie_id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios(
          `https://api.potterdb.com/v1/movies/${movie_id}`
        );
        console.log(res);
        setBook(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBook();
  }, []);

  return (
    <div>
      {movie?.attributes?.title && (
        <div className="container">
          <div className="inside-movie">
            <h2>{movie.attributes.title}</h2>
            <img src={movie.attributes.poster} alt="movie poster" />
            <h5>Summary</h5>
            <p>{movie.attributes.summary}</p>
            <div className="movie-p">
              <p>
                <span className="movie-span">Release date: </span>
                {movie.attributes.release_date}
              </p>
              <p>
                <span className="movie-span">Director: </span>
                {movie.attributes.directors}
              </p>
              <p>
                <span className="movie-span">Rating: </span>
                {movie.attributes.rating}
              </p>
              <p>
                <span className="movie-span">Distributor: </span>
                {movie.attributes.distributors}
              </p>
              <p>
                <span className="movie-span">Running Time: </span>
                {movie.attributes.running_time}
              </p>
            </div>
          </div>
          <div>
            <nav>
              <Link to="/Tabs2">Go Back</Link>
            </nav>
            <Routes>
            <Route path="/Tab2" element={<Tabs2 />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
