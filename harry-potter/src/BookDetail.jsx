import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookDetail.css";
import { Link, Routes, Route } from "react-router-dom";
import Tabs2 from "./Tabs2";

function BookDetail() {
  const [book, setBook] = useState({});

  const { book_id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios(`https://api.potterdb.com/v1/books/${book_id}`);
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
      {book?.attributes?.title && (
        <div className="container">
          <div className="inside-book">
            <h2>{book.attributes.title}</h2>
            <img src={book.attributes.cover} alt="book cover" />
            <h5>Summary</h5>
            <p>{book.attributes.summary}</p>
            <p>
              <span className="book-span">Release date: </span>
              {book.attributes.release_date}
            </p>
            <p>
              <span className="book-span">Pages: </span>
              {book.attributes.pages}
            </p>
            <p>
              <span className="book-span">Dedication: </span>
              {book.attributes.dedication}
            </p>
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

export default BookDetail;
