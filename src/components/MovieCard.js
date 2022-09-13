import React from "react";
import { Badge } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);

  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
        height: "200px",
      }}
      onClick={showDetail}
    >
      <div className="overlay">
        <h3>{item.title}</h3>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger" className="badge" key={id}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className="movie-card-info">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow" }}
                className="star"
              />
              <span>{item.vote_average}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} className="users" />
              <span>{item.popularity}</span>
            </li>
            <li>
              <span className="movie-adultInfo">
                {item.adult ? "청불" : "Under 18"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

{
  /* <div className="info">
<span>{item.vote_average}</span>
<span>{item.adult ? "청불" : "Under 18"}</span>
</div> */
}
