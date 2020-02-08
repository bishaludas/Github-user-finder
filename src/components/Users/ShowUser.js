import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

class ShowUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      login,
      id,
      avatar_url,
      html_url,
      followers_url,
      following_url,
      name,
      company,
      blog,
      location,
      email,
      hireable,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      updated_at
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <div>
          Hireable :{" "}
          {hireable ? (
            <i className="ion-checkmark-circled text-success"></i>
          ) : (
            <i className="ion-close-circled text-danger"></i>
          )}
        </div>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "150px" }}
              alt=""
            />
            <h1>{name}</h1>
            <p>Location : {location}</p>
          </div>

          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            {blog && (
              <div>
                <b>Username : </b>
                {login}
              </div>
            )}

            {company && (
              <div>
                <>Company : </> {company}
              </div>
            )}

            {blog && (
              <div>
                <b>Website : </b>
                {blog}
              </div>
            )}
            <a href={html_url} className="btn btn-dark btn-sm">
              View Github profile
            </a>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">
            {followers} {followers === 1 ? "Follower" : "Followers"}
          </div>
          <div className="badge badge-primary">{following} Following</div>
          <div className="badge badge-success">
            {public_repos} {public_repos === 1 ? "Repo" : "Repos"}
          </div>
          <div className="badge badge-success">
            {public_gists} {public_gists === 1 ? "Gist" : "Gists"}
          </div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default ShowUser;
