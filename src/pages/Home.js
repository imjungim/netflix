import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from "react-redux";
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie)
 // console.log("home",upcomingMovies)

  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])
//loading->true 스피너를 보여주고 : 데이터 도착 전
//loading -> false 면 데이터를 보여준다 : 데이터 도착후 또는 에러가 났을때
  if(loading){
    return ( 
    <ClipLoader color="#ffff" loading={loading} size={150} />
    );
  }
  return (
    <div className='home'>
      <Banner movie={popularMovies.results[0]}/> 
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies}/>
    </div>
  )
}

export default Home

//useEffect부르기 전 popularMovie.results[0]이 실행되면 에러
//데이터가 도착을 하면 렌더가 될 수 있도록 조건부렌더링처리

//영화데이터가 도착이전일경우(true) 로딩스피너
//loading 이 true일때

