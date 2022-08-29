import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Container, Row, Col} from "react-bootstrap";
import FilterSection from '../components/FilterSection';
import MovieList from '../components/MovieList';
import SortSection from '../components/SortSection';
import ClipLoader from "react-spinners/ClipLoader";
import { movieAction } from '../redux/actions/movieAction';


const Movies = () => {
  // const dispatch = useDispatch();
  // const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie)
  // console.log("test",popularMovies)

  // useEffect (()=>{
  //   dispatch(movieAction.getMovies());
  // },[])

  return (
    <div className='Movies'>
    <Container>
      <Row>
        <Col lg={4}>
        <SortSection/>
        <FilterSection/>
        </Col>
        <Col lg={8}>
        <MovieList/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Movies