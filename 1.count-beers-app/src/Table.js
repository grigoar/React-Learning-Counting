import React, { Component } from "react";

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
  const rows = props.persons.map((row, index) => {
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
            +
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
  return (
    <table>
      <TableBody
        persons={persons}
        removePerson={removePerson}
        modifyBeers={modifyBeers}
      ></TableBody>
    </table>
  );
};
export default Table;
