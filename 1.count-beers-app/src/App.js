import React, { Component } from "react";
import Person from "./Person";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
  state = {
    persons: [],
  };

  handleSubmit = (person) => {
    this.setState({ persons: [...this.state.persons, person] });
  };

  removePerson = (index) => {
    const { persons } = this.state;
    this.setState({
      persons: persons.filter((person, i) => {
        return i != index;
      }),
    });
  };

  render() {
    const persons = [
      {
        name: "Charlie",
        beers: "4",
      },
      {
        name: "Mac",
        beers: "6",
      },
      {
        name: "Dee",
        beers: "2",
      },
      {
        name: "Dennis",
        beers: "5",
      },
    ];

    return (
      <div>
        <h1>
          The most basic app for not forgetting the number of beers you had this
          night!
        </h1>

        <Table
          persons={this.state.persons}
          removePerson={this.removePerson}
        ></Table>
        <Form handleSubmit={this.handleSubmit}></Form>
      </div>
    );
  }
}

export default App;
