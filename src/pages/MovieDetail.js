import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { movieAction } from "../redux/actions/movieAction";
import MovieDetailBanner from "../components/MovieDetailBanner";
//getMovieDetail redux action 만들기
//useParams로 id값 넘겨주기
//useSelect movie데이터 가져와
//
const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedMovie } = useSelector((state) => state.movie);
  console.log("???", selectedMovie);

  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  return (
    <div className="MovieDetail">
      <MovieDetailBanner selectedMovie={selectedMovie} />
      <Container>
        <Row>
          <Col xl={6} lg={4}>
            <div>
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`}/>
            </div>
          </Col>
          <Col xl={6} lg={8}>
            <div>
              <div className="genrebox">
                <ul className="detail_genre">
                  {selectedMovie.genres.map((item) => {
                    return <li>{item.name}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h1>{selectedMovie.title}</h1>
                <h3>{selectedMovie.tagline}</h3>
              </div>
              <div>
                <span>{selectedMovie.vote_average}</span>
                <span>{selectedMovie.popularity}</span>
                <span>{selectedMovie.adult ? "청불" : "Under 18"}</span>
              </div>
              <div>{selectedMovie.overview}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
