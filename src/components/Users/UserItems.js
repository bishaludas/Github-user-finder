import React, { Component } from "react";

export class UserItems extends Component {
  render() {
    const { login, id, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "60px" }}
          alt=""
        />
        <p>{login}</p>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my1">
            Follow
          </a>
        </div>
      </div>
    );
  }
}

export default UserItems;
