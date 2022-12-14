import React from "react";

const Banner = ({ movie }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${movie.backdrop_path}` +
          ")",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-info">
        <h1 className="banner-title">{movie.title}</h1>
        <p className="banner-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

//url부분은 string으로 처리!!
