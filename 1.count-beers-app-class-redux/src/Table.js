import React, { Component } from "react";
import { connect } from "react-redux";
import { getPersons } from "./redux/selectors";
import { deletePerson } from "./redux/actions";
import { DELETE_DRINKING_BUDDY } from "./redux/actionTypes";
import TableBody from "./TableBody";

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
