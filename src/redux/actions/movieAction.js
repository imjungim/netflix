import api from "../api"

//api키값 .env 환경변수 설정
const API_KEY = process.env.REACT_APP_API_KEY
function getMovies(){
  return async(dispatch)=>{
    const popularMovieApi = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
 


    // let url= `
    // https://api.themoviedb.org/3`
    // let response = await fetch(url)
    // let data = await response.json()

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
  }
}

export const movieAction = {
  getMovies,
};

//리덕스미들웨어
// 함수를 리턴