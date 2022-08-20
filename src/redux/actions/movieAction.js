import api from "../api";

//api키값 .env 환경변수 설정
const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);
      console.log("genreList!", genreList);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getMovieDetail(id) {
  return async (dispatch) => {
    const getMovieDetailApi = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    //const getMovieReview = await api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    console.log("getMovie!!!!!", getMovieDetailApi);
    dispatch({
      type: "GET_MOVIES_DETAIL",
      payload: { selectedMovie : getMovieDetailApi.data },
    });
  };
}

export const movieAction = {
  getMovies,
  getMovieDetail,
};

//리덕스미들웨어
// 함수를 리턴

//3개의 데이터를 병렬로 한꺼번 -> Promise.all() 함수사용
