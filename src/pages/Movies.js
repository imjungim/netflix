import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FilterSection from "../components/FilterSection";
import MovieList from "../components/MovieList";
import SortSection from "../components/SortSection";
import ClipLoader from "react-spinners/ClipLoader";
import { movieAction } from "../redux/actions/movieAction";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";



const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const searchKeyword = query.get("query");
  const [page, setPage] = useState(1);
  const [close, setClose] = useState(false);
  const [filterTitle, setFilterTitle] = useState("popularity.desc");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { 
    loading, 
    sortMovies, 
    searchMovies, 
    genreList, 
    minValue, maxValue, genreTitle } =
    useSelector((state) => state.movie);

  console.log("SEARCH",searchMovies)
  console.log("SORT",sortMovies)

  useEffect(() => {
    dispatch(movieAction.getMovies(page, searchKeyword, filterTitle));
  }, [page, filterTitle,searchKeyword]);


  //sort select
  const handleChange = (eventKey) => {
    setFilterTitle(eventKey);
    navigate("/movies");
  };

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="Movies">
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              <div className={close ? "sort-section-closed" : "sort-section"}>
                <div className="sort-section_1">
                  <h5>Sort</h5>
                  <span className="arrow-right">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      onClick={() => setClose(!close)}
                    />
                  </span>
                </div>
                <div className="sort-dropdown">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={filterTitle}
                    variant="secondary"
                    onSelect={handleChange}
                  >
                    <NavDropdown.Item eventKey="popularity.desc">
                      Popularity(Desc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="popularity.asc">
                      Popularity(Asc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="release_date.desc">
                      Release Day(Desc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="release_date.asc">
                      Release Day(Asc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="vote_average.desc">
                      Vote(Desc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="vote_average.asc">
                      Vote(Asc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="revenue.desc">
                      Revenue(Desc)
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="revenue.asc">
                      Revenue(Asc)
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
            <FilterSection />
          </Col>
          <Col lg={8}>
            <MovieList
              loading={loading}
              searchMovies={searchMovies}
              sortMovies={sortMovies}
              maxValue={maxValue}
              minValue={minValue}
              genreList={genreList}
              genreTitle={genreTitle}
              searchKeyword={searchKeyword}
              filterTitle={filterTitle}
              page={page}
              setPage={setPage}
            />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Movies;
