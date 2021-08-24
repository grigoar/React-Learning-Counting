import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import "./index.css";
import App from "./App";

// const store = createStore(nrBeersReducer);

// const Component = ({ person, handleIncrementClick, handleDecrementClick }) => (
//   <div>
//     <h1> Hello React & Redux ! {person.beers}</h1>;
//     <button onClick={handleIncrementClick}>Increment</button>
//     <button onClick={handleDecrementClick}>Decrement</button>
//   </div>
// );
// const Container = connect()(Component);

// const mapStateToProps = (state) => {
//   return {
//     person: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleIncrementClick: () => dispatch({ type: "INCREASE_BEER_NUMBER" }),
//     handleDecrementClick: () => dispatch({ type: "DECREASE_BEER_NUMBER" }),
//   };
// };
// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
