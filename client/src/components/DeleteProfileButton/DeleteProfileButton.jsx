import React from "react";
import axios from "axios";

const handleDeleteProfile = (e, userData) => {
  e.preventDefault();
  axios
    .delete("/api/user", userData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function DeleteProfileButton() {
  return (
    <button
      className="waves-effect waves-light btn hoverable"
      onClick={handleDeleteProfile}
    >
      Delete Profile Profile
    </button>
  );
}

export default DeleteProfileButton;
