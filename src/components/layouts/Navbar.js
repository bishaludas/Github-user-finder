import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon}></i> {props.title}
        </h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  icon: "icon ion-social-octocat",
  title: "Github Finder"
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Navbar;
