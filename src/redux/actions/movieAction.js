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
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const getMovieDetailApi = await api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const getMovieReviewApi = await api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      const getMovieRecommendationApi = await api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      const getMovieVideoApi = await api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      let [
        selectedMovie,
        getMovieReview,
        getMovieRecommendation,
        getMovieVideo,
      ] = await Promise.all([
        getMovieDetailApi,
        getMovieReviewApi,
        getMovieRecommendationApi,
        getMovieVideoApi,
      ]);

      console.log("getMovie!!!!!", getMovieVideoApi);
      dispatch({
        type: "GET_MOVIES_DETAIL",
        payload: {
          selectedMovie: getMovieDetailApi.data,
          getMovieReview: getMovieReviewApi.data,
          getMovieRecommendation: getMovieRecommendationApi.data,
          getMovieVideo: getMovieVideoApi.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
  getMovieDetail,
};

//리덕스미들웨어
// 함수를 리턴

//3개의 데이터를 병렬로 한꺼번 -> Promise.all() 함수사용
