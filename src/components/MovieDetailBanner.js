import React from "react";


const MovieDetailBanner = ({getMovieDetail}) => {
 // console.log("title",selectedMovie)
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
        <div className="movies-box-title">
          <h4>{getMovieDetail.title}</h4>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetailBanner;
