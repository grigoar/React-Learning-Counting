import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import eventsReducer from "./reducers/reducers";

import "./index.css";
// import App from "./components/App";

const store = createStore(eventsReducer);

const Component = ({ count, handleIncrementClick, handleDecrementClick }) => (
  <div>
    <h1> Hello React & Redux ! {count}</h1>;
    <button onClick={handleIncrementClick}>Increment</button>
    <button onClick={handleDecrementClick}>Decrement</button>
  </div>
);
// const Container = connect()(Component);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREASE_BEER_NUMBER" }),
    handleDecrementClick: () => dispatch({ type: "DECREASE_BEER_NUMBER" }),
  };
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
