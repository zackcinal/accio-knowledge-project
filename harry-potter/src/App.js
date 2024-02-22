import React from "react";
import VideoBackground from "./VideoBackground.jsx";
import { Link, Routes, Route } from "react-router-dom";
import Tabs from "./Tabs.jsx"
import Tabs2 from "./Tabs2"
import "./App.css";
import BookDetail from "./BookDetail.jsx";
import MovieDetail from "./MovieDetail.jsx";

function App() {
  return (
    <div className="App">
      <div className="welcome-page">
      <VideoBackground />
      <h1>ACCIO KNOWLEDGE</h1>
      <h3>Your Guide to Wizarding World!</h3>
      </div>
      <div className="links">
        <nav>
          <Link to="/Tabs"><span className="link-span">Go to Hogwarts!</span></Link>
          <Link to="/Tabs2"><span className="link-span">Books & Movies</span></Link>
        </nav>
        <Routes>
          <Route path="/Tabs" element={<Tabs />} />
          <Route path="/Tabs2" element={<Tabs2 />} />
          <Route path="/books/:book_id" element={<BookDetail />} />
          <Route path="/movies/:movie_id" element={<MovieDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
