import React, { Component } from "react";

export class search extends Component {
  state = {
    name: ""
  };

  // Fetches value from all input fields in js object structure
  OnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  OnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
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
      </div>
    );
  }
}

export default search;
