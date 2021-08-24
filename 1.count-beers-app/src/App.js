import React, { Component } from "react";
import Person from "./Person";
import Form from "./Form";
import Table from "./Table";
import { connect } from "react-redux";
import { increaseBeers, decreaseBeers } from "./redux/actions";
class App extends Component {
  state = {
    persons: [],
  };

  addPerson = (person) => {
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

  modifyBeers = (index, nrBeers) => {
    const { persons } = this.state;

    if (nrBeers < 0 && persons[index].beers === 0) return;
    persons[index].beers += nrBeers;

    this.setState({ persons: persons });
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
      <div className="container">
        <h1>
          The most basic app for not forgetting the number of beers you had this
          night!
        </h1>

        <Table
          persons={this.state.persons}
          removePerson={this.removePerson}
          modifyBeers={this.modifyBeers}
        ></Table>
        <Form handleSubmit={this.addPerson}></Form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {};

export default connect(null, { increaseBeers })(App);
// export default App;

// const mapStateToProps = (state, ownProps) => ({
//   // ... computed data from state and optionally ownProps
// })

// const mapDispatchToProps = {
//   // ... normally is an object full of action creators
// }

// // `connect` returns a new function that accepts the component to wrap:
// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// // and that function returns the connected, wrapper component:
// const ConnectedComponent = connectToStore(Component)

// // We normally do both in one step, like this:
// connect(mapStateToProps, mapDispatchToProps)(Component)
