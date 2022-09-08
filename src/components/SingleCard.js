import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const SingleCard = ({ item }) => {
  // console.log("searchMovies",searchMovies)
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  const showDetail = () => {
    navigate(`/movies/${item.id}}`);
  };

  return (
    <div className="singleCard">
      <div
        className="singleCard-back"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original//${item.poster_path}` +
            ")",
          width: "350px",
          height: "500px",
        }}
        onClick={showDetail}
      >
        <div className="singleCard-content">
          <div className="singleCard-title">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
            />
            <h4>{item.title}</h4>
          </div>
          <div className="release-date">
            <p>
            {moment(item.release_date).format("YYYY")}
            </p>
          </div>
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="danger">
                {genreList.find((item) => item.id === id).name}
              </Badge>
            ))}
          </div>
          <div className="singleCard-overview">
            <p>{item.overview.substring(0, 300) + "..."}</p>
          </div>
          <div className="singleCard-info">
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
    </div>
  );
};

export default SingleCard;
