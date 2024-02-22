import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://api.potterdb.com/v1/movies");
        console.log(res);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="movies-in">
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div className="movies-info">
          {data.map((movie) => (
            <div key={movie.id} className="movie">
              <img src={movie.attributes.poster} />
              <h2>{movie.attributes.title}</h2>
              <Link to={`/movies/${movie.id}`}>
                    <button className="media-button">View Movie Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
