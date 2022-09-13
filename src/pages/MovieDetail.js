import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import ClipLoader from "react-spinners/ClipLoader";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";
import { movieAction } from "../redux/actions/movieAction";
import MovieDetailBanner from "../components/MovieDetailBanner";
import Review from "../components/Review";
import RelatedMovies from "../components/RelatedMovies";
import MovieCard from "../components/MovieCard";
import MovieSlide from "../components/MovieSlide";

//getMovieDetail redux action 만들기
//useParams로 id값 넘겨주기
//useSelect movie데이터 가져와
//
const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    getMovieDetail,
    getMovieReview,
    getMovieRecommendation,
    getMovieVideo,
    loading,
  } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  const [reviewActive, setReviewActive] = useState(true);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="MovieDetail">
      <MovieDetailBanner getMovieDetail={getMovieDetail} />
      <section className="detail-area">
        <Container>
          <Row>
            <Col sm={6} xl={6} lg={4}>
              <div className="MovieDetail-img">
                <img
                  src={`https://image.tmdb.org/t/p/original//${getMovieDetail.poster_path}`}
                />
              </div>
            </Col>
            <Col sm={6} xl={6} lg={8}>
              <div className="MovieDetail-data">
                <div className="genrebox">
                  <ul className="detail_genre">
                    {getMovieDetail.genres.map((item) => {
                      return <li>{item.name}</li>;
                    })}
                  </ul>
                </div>
                <div className="detail-title">
                  <h1>{getMovieDetail.title}</h1>
                  <h3>{getMovieDetail.original_title}</h3>
                </div>
                <div className="movie-count">
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "yellow" }}
                        className="star"
                      />
                      <span>{getMovieDetail.vote_average}</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faUsers} className="users" />
                      <span>{getMovieDetail.popularity}</span>
                    </li>
                    <li>
                      <span className="movie-adultInfo">
                        {getMovieDetail.adult ? "청불" : "Under 18"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="movie-overview">
                  <p>{getMovieDetail.overview}</p>
                </div>
                <div className="movie-info">
                  <ul>
                    <li>
                      <span>Budget</span>
                      ${getMovieDetail.budget}
                    </li>
                    <li>
                      <span>Revenue</span>
                      ${getMovieDetail.revenue}
                    </li>
                    <li>
                      <span>Release Day</span>
                      {getMovieDetail.release_date}
                    </li>
                    <li>
                      <span>Time</span>
                      {getMovieDetail.runtime}
                    </li>
                  </ul>
                </div>
                <div className="watch-button">
                  <FontAwesomeIcon icon={faVideo} />
                  <button onClick={() => setShow(true)}>Watch Trailer</button>
                  {/* Watch Trailer Modal */}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                  >
                    <Modal.Header closeButton dialogClassName="modal">
                      <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <YouTube
                        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                        videoId={getMovieVideo.results[0].key}
                        opts={{
                          width: "100%",
                          height: "600px",
                          playerVars: {
                            autoplay: 0, //자동재생 O
                            rel: 0, //관련 동영상 표시하지 않음
                            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                          },
                        }}
                      />
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </Col>
          </Row>

          {/* review & related movie */}
          <section className="review-related-area">
            <Row>
              <Col sm={12}xl={12} lg={12}>
                <ul className="review-button">
                  <li>
                    <button onClick={() => setReviewActive(true)}>
                      REVIEW
                      ({getMovieReview.results.length})
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setReviewActive(false)}>
                      RELATED MOVIES
                      ({getMovieRecommendation.results.length})
                    </button>
                  </li>
                </ul>
                <div
                  className={
                    reviewActive ? "review-content" : "related-content"
                  }
                >
                  {reviewActive ? (
                    <Review review={getMovieReview} />
                  ) : (
                 //   <RelatedMovies />
                    getMovieRecommendation.results.map((item) => (
                      <MovieCard item={item} />
                    ))
                  )}
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default MovieDetail;

{
  /*
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/LEXtdLNI3SrzAA2bd5xJsXm2Ee.jpg" />
    */
}

// getMovieRecommendation.results.map((item)=>
// <MovieCard item={item} />)
