let initialState = {
  popularMovies :{},
  topRatedMovies : {},
  upcomingMovies : {},
  loading : true,
  genreList : [],
  selectedMovie : null,
};


function movieReducer(state=initialState, action){
  let {type, payload} = action
    switch(type){
      case "GET_MOVIES_REQUEST" :
        return {
          ...state, loading : true
        }
      case "GET_MOVIES_SUCCESS" : 
        return {
          ...state, 
          popularMovies : payload.popularMovies,
          topRatedMovies : payload.topRatedMovies, 
          upcomingMovies : payload.upcomingMovies,
          loading : false,
          genreList : payload.genreList,
        }
      case "GET_MOVIES_DETAIL" :
        return {
          ...state,
          loading : false,
          selectedMovie : payload.selectedMovie
        }
      case "GET_MOVIES_FAILURE" :
        return {...state, loading : false};
      default :
        return {...state};
      }
}

export default movieReducer;

//상태를 받아와서 새로운 상태로 반환하는 함수
//api를 호출해 받아온 데이터를 넣은 새로운 상태