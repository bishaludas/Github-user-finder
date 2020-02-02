import React from "react";

const Alert = ({ showAlert }) => {
  if (showAlert === null) {
    return <div></div>;
  } else {
    return (
      <div className={`alert alert-${showAlert.type}`}>
        <p>{showAlert.msg}</p>
      </div>
    );
  }
};

export default Alert;
