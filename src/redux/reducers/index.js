import { combineReducers } from "redux";
import movieReducer from './movieReducer'

export default combineReducers({
  movie : movieReducer,
});

//combineReducers를 통해 store에 전달(리듀서 합치기)