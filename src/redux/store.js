import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';//developer tool
import thunk from 'redux-thunk';
import rootReducer from './reducers'

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

  export default store;
