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
        <td>{row.name}</td>
        <td>{row.beers}</td>
        <td>
          <button onClick={() => props.removePerson(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { persons, removePerson } = props;
  return (
    <table>
      <TableBody persons={persons} removePerson={removePerson}></TableBody>
    </table>
  );
};
export default Table;
