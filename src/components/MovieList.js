import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import SingleCard from "../components/SingleCard";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { movieAction } from "../redux/actions/movieAction";

const MovieList = ({
  sortMovies,
  searchMovies,
  minValue,
  maxValue,
  genreList,
  genreTitle,
  searchKeyword,

}) => {

  let movies = [];
console.log("sort2",sortMovies)
console.log("search임",searchMovies)

// 년도
  const yearFilter = sortMovies.results
    .slice()
    .filter(
      (element) =>
        minValue <= moment(element.release_date).format("YYYY") &&
        maxValue >= moment(element.release_date).format("YYYY")
    );
    console.log("yearFilter", yearFilter);
  //장르
  const genreFilter = genreList?.find((item) => item.name === genreTitle)?.id;
  const genres = sortMovies.results
    .slice()
    .filter((element) => element.genre_ids.includes(genreFilter));
  console.log("gggenres", genres);

  //연도 && 장르
  const filterAll = yearFilter
    ?.slice()
    .filter((it) => genres?.includes(it));
  console.log("All", filterAll);

// //  검색
if(searchMovies.results !== null || searchKeyword !== null){
  movies=searchMovies.results
  console.log("검색",movies)
}
//movies메인
if(searchMovies.results[0]?.title == "UNdefined" ||
(sortMovies.results !== null && searchKeyword == null)
){
  movies=sortMovies.results;
  console.log("메인",movies)
}//년도
if(minValue >=1990 && maxValue <= 2022){
  movies = yearFilter
  console.log("년도",movies)
}
if(genreFilter){
  movies=genres
  console.log("장르",movies)
}
  return (
    <div>
      <Row>
        {movies.map((item) => {
          return (
            <Col lg={6}>
              <SingleCard item={item} key={item.id} />
            </Col>
          );
        })}
      </Row>
 
    </div>
  );
};

export default MovieList;

{
  /* <SingleCard item={item} searchMovies={searchMovies} key={item.id}/> */
}
