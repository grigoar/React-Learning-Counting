import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", beers: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initialState = {
    name: "",
    beers: 0,
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    alert(
      `a person ${this.state.name} was added and he/she drunk ${this.state.beers} beers`
    );
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    event.preventDefault();
  }

  render() {
    const { name, beers } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        ></input>
        <input type="button" value="Submit" onClick={this.handleSubmit}></input>
      </form>
    );
  }
}

export default Form;
