import React, { Component } from "react";
import PropTypes from "prop-types";

export class search extends Component {
  state = {
    name: "",
    error: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  // Fetches value from all input fields in js object structure
  OnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  OnSubmit = e => {
    e.preventDefault();
    // check if is of valid length
    if (this.state.name.length == null || this.state.name === "") {
      this.setState({ error: "Empty string provided" });
    } else {
      this.props.searchUsers(this.state.name);
      this.setState({ error: "" });
    }
    this.setState({ name: "" });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.OnSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Search user"
            value={this.state.name}
            onChange={this.OnChange}
          />

          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>

        {/* clear button */}
        {showClear && (
          <button
            className="btn btn-primary btn-block text-center"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}

        <p className="bg-light my-2 ">{this.state.error}</p>
      </div>
    );
  }
}

export default search;
