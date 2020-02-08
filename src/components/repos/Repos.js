import React from "react";
import ShowRepos from "./ShowRepos";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
  return repos.map(repo => {
    return <ShowRepos repo={repo} key={repo.id} />;
  });
};

Repos.prototype = {
  repos: PropTypes.array.isRequired
};

export default Repos;
