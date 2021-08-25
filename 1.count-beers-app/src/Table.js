import React, { Component } from "react";
import { connect } from "react-redux";
import { getPersons } from "./redux/selectors";
import { deletePerson } from "./redux/actions";
import { DELETE_DRINKING_BUDDY } from "./redux/actionTypes";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Beers</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  //   console.log("Something to debug" + props.persons[0].name);
  // const persons = [
  //   {
  //     name: "Charlie",
  //     beers: "4",
  //   },
  //   {
  //     name: "Mac",
  //     beers: "6",
  //   },
  //   {
  //     name: "Dee",
  //     beers: "2",
  //   },
  //   {
  //     name: "Dennis",
  //     beers: "5",
  //   },
  // ];
  console.log("from table-body");
  console.log(props);
  const { persons } = props;
  const rows = persons.map((row, index) => {
    return (
      <tr key={index}>
        <tr className="priority">
          <p className="number-beers">{row.beers}</p>
        </tr>
        <tr className="priority">
          <p className="drinkers-name">{row.name}</p>
        </tr>

        <td>
          <button
            className="button-plus"
            onClick={() => props.modifyBeers(index, 1)}
          >
            + {props.a}
          </button>
        </td>
        <td>
          <button
            className="button-minus"
            onClick={() => props.modifyBeers(index, -1)}
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

const Table = (props) => {
  const { persons, removePerson, modifyBeers } = props;
  console.log(props);
  return (
    <table>
      <TableBody
        persons={persons}
        removePerson={removePerson}
        modifyBeers={modifyBeers}
        a={props.a}
      ></TableBody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("from map State to props");
  console.log(state.personR);

  return { a: 33, persons: state.personR.persons };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("the own props in dispatch are");
  console.log(ownProps);
  return {
    removePerson: (index) => {
      dispatch(deletePerson(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default connect((state) => ({ persons: getPersons(state) }))(Table);

// export default Table;
