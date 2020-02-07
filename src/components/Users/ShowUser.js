import React, { Component } from "react";

class ShowUser extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.getUser(this.props.match.params.login);
    console.log(this.props.user);
  }
  render() {
    const { name, avatar_url, location, bio, blog } = this.props.user;
    const { loading } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{avatar_url}</p>
      </div>
    );
  }
}

export default ShowUser;
