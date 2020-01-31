import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    icon: "icon ion-social-octocat",
    title: "Github Finder"
  };

  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string
  };
  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <h1>
            <i className={this.props.icon}></i> {this.props.title}
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
