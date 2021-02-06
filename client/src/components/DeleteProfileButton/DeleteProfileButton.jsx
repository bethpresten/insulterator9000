import React from "react";
import axios from "axios";
import "./DeleteProfileButton.css";

const handleDeleteProfile = (e, userData) => {
  e.preventDefault();
  axios
    .delete("/api/user/:id", userData)
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
      className="btn hoverable"
      onClick={handleDeleteProfile}
      id="delete-button"
    >
      Delete Insulterator9000 Profile
    </button>
  );
}

export default DeleteProfileButton;
