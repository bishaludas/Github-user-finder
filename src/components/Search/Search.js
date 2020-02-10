import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [name, setName] = useState("");

  // Fetches value from all input fields in js object structure
  const OnChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    setName(e.target.value);
  };

  // Action on form submit
  const OnSubmit = e => {
    e.preventDefault();
    // check if is of valid length
    if (name === "") {
      setAlert("Search field cannot be empty", "light");
    } else {
      searchUsers(name);
      // this.setState({ name: "" });
      setName("");
    }
  };

  return (
    <div>
      <form onSubmit={OnSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Search user"
          value={name}
          onChange={OnChange}
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
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
