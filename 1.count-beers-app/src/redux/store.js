import { combineReducers, createStore } from "redux";
import rootReducer from "./reducers"; //from index.js

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export default createStore(rootReducer);
