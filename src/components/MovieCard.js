import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  const showDetail = () => {
    navigate(`/movies/${item.id}`)
  }

  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
        // width: "300px",
        height: "200px",
      }} onClick={showDetail}
    >
      <div className="overlay">
        <h3>{item.title}</h3>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item)=>item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
