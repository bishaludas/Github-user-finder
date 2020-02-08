import React from "react";
import PropTypes from "prop-types";

const ShowRepos = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>{repo.full_name}</a>
    </div>
  );
};

ShowRepos.prototype = {
  repo: PropTypes.object.isRequired
};

export default ShowRepos;
