import api from "../api"

//api키값 .env 환경변수 설정
const API_KEY = process.env.REACT_APP_API_KEY
function getMovies(){
  return async(dispatch)=>{
    try{
      dispatch({type : "GET_MOVIES_REQUEST"})
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
  
      let [popularMovies,topRatedMovies,upcomingMovies] = await Promise.all([
        popularMovieApi,topRatedApi,upComingApi
      ]);
      dispatch({
        type : "GET_MOVIES_SUCCESS",
        payload : {
          popularMovies : popularMovies.data,
          topRatedMovies: topRatedMovies.data, 
          upcomingMovies: upcomingMovies.data
        },
      })
    }catch(error){
      //에러 핸들링
      dispatch({type : "GET_MOVIES_FAILURE"})
    }

    //console.log("promise all data", data)
    console.log("popularMovies", popularMovies)
    console.log("topRatedMovies", topRatedMovies)
    console.log("upcomingMovies", upcomingMovies)
    
  
  }
}

export const movieAction = {
  getMovies,
};

//리덕스미들웨어
// 함수를 리턴

//3개의 데이터를 병렬로 한꺼번 -> Promise.all() 함수사용