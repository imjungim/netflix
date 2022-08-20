import React from "react";
import { Link } from "react-router-dom";

const MovieDetailBanner = ({selectedMovie}) => {
 //console.log("mm",selectedMovie)
  return (
    <div
      className="MovieDetailBanner"
      style={{
        backgroundImage:
          "url(" +
          `https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg` +
          ")",
      }}
    >
      <div className="movies-box">
        <h1>NETFLIX</h1>
        <ul>
          <li>{selectedMovie.title}</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailBanner;
