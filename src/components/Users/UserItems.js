import React from "react";
import PropTypes from "prop-types";

const UserItems = props => {
  const { login, id, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt={login + id}
      />
      <p>{login}</p>

      <div>
        <a href={html_url} className="btn btn-dark btn-sm my1">
          Follow
        </a>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItems;
