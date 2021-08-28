import React from "react";
import { connect } from "react-redux";
import {
  INCREASE_BEER_NUMBER,
  DECREASE_BEER_NUMBER,
} from "./redux/actionTypes";
import { increaseBeers, decreaseBeers } from "./redux/actions";

const TableBody = (props) => {
  console.log("from table-body");
  console.log(props);
  const { persons } = props;
  const rows = persons.map((person, index) => {
    return (
      <tr key={index}>
        <tr className="priority">
          <p className="number-beers">{person.beers}</p>
        </tr>
        <tr className="priority">
          <p className="drinkers-name">{person.name}</p>
        </tr>

        <td>
          <button
            className="button-plus"
            onClick={() => props.increaseBeers(index)}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="button-minus"
            onClick={() => props.decreaseBeers(index)}
          >
            -
          </button>
        </td>
        <td>
          <button
            className="button-delete"
            onClick={() => props.removePerson(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const mapStateToProps = (state) => {
  console.log("from table body mapState to props");
  console.log(state);
  return { persons: state.personR.persons };
};
const mapDispatchToProps = (state) => {
  return {
    increaseBeers: (index) => {
      state(increaseBeers(index));
    },
    decreaseBeers: (index) => {
      state(decreaseBeers(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
// export default TableBody;
