import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://api.potterdb.com/v1/books");
        console.log(res)
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
    <div className="books-in">
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div className="books-info">
          {data.map((book) => (
            <div key={book.id} className="book">
              <img src={book.attributes.cover} />
              <h2>{book.attributes.title}</h2>
              <p>📅{book.attributes.release_date}</p>
              <p>📄 {book.attributes.pages}</p>
              <p>🖋️ {book.attributes.author}</p>
                <Link to={`/books/${book.id}`}>
                     <button className="media-button">View More Info</button>
                </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
