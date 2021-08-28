import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "./redux/actions";

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
    //dispatches actions to add person
    this.props.addPerson(this.state);
    this.setState(this.initialState);
    // this.props.handleSubmit(this.state);
    // this.setState(this.initialState);
    event.preventDefault();
  }

  render() {
    const { name, beers } = this.state;
    return (
      <div className="form-component">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Drinking Buddy"
          onChange={this.handleChange}
        ></input>
        <input
          type="button"
          value="Add Person"
          onClick={this.handleSubmit}
        ></input>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {};

export default connect(null, { addPerson })(Form);
