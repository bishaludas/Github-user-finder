import React from "react";
import PropTypes from "prop-types";

const UserItem = props => {
  const { id, name, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={name}
        className="round-img"
        style={{ width: "100px" }}
      />
      <p>{props.user.name}</p>

      <div>
        <a href={html_url} className="btn btn-primary btn-sm">
          Follow {id}
        </a>
      </div>
    </div>
  );
};

export default UserItem;
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
