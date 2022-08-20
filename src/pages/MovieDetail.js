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
  const { 
    selectedMovie,
    getMovieDetail,
    getMovieRecommendation, 
    getMovieVideo
  } = useSelector((state) => state.movie);
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
              <img src="https://image.tmdb.org/t/p/original///rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg" />
            </div>
          </Col>
          <Col xl={6} lg={8}>
            <div>
              <div className="genrebox">
                <ul className="detail_genre">
                  {/* {selectedMovie.genres.map((item) => {
                    return <li>{item.name}</li>;
                  })} */}
                  <li>testName</li>
                </ul>
              </div>
              <div>
                <h1>title</h1>
                <h3>tagline</h3>
              </div>
              <div>
                {/* <span>{selectedMovie.vote_average}</span>
                <span>{selectedMovie.popularity}</span>
                <span>{selectedMovie.adult ? "청불" : "Under 18"}</span> */}
              </div>
              <div>
                <p>overview</p>
              </div>
              <div>
                <ul>
                  <li>
                    <span>budget</span>
                    $000000
                  </li>
                  <li>
                    <span>budget</span>
                    $000000
                  </li>
                  <li>
                    <span>budget</span>
                    $000000
                  </li>
                  <li>
                    <span>budget</span>
                    $000000
                  </li>
                </ul>
              </div>
              <div>
                <button>Watch Trailer</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12}>
            <div className="movie-review">
              <ul>
                <li>
                  <button>REVIEW</button>
                </li>
                <li>
                  <button>RELATED MOVIES</button>
                </li>
              </ul>
              <div className="review-content">

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
