import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import SingleCard from "../components/SingleCard";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";


const MovieList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  console.log("test", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies(page));
  }, [page]);

  const handlePageChange = (page) => {
    console.log(`active page is ${page}`);
    setPage(page);
  };
  if(loading){
    return ( 
    <div className="loading">
    <ClipLoader color="#ffff" loading={loading} size={150}  />
    </div>
    );
  }
  return (
    <div>
      <Row>
        {popularMovies.results.map((item) => {
          return (
            <Col lg={6}>
              <SingleCard item={item} />
            </Col>
          );
        })}
        ;
      </Row>
      <div className="pagination-area">
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MovieList;
