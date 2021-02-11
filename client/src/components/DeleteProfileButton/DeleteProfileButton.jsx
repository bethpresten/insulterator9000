import React, { useContext } from "react";
import axios from "axios";
import "./DeleteProfileButton.css";
import globalUser from "../../utils/globalUser";
import { useParams, useHistory} from "react-router-dom";



function DeleteProfileButton() {
  const { id } = useParams();

  const deleteProfile = (id) => {
    axios
      .delete(`/api/user/${id}`)
      .then(() => {
        alert("profile successfully deleted!");

        console.log("profile deleted");
      })
      .catch((err) => {
        console.log(err);
      });

  };
  
  const deleteUser = useContext(globalUser);
  console.log(deleteUser);

  return (
    <div>
      <button
        className="btn hoverable"
        id="delete-button"
        onClick={() => {
          deleteProfile(deleteUser.id);
        }}
       
      >
        Delete Insulterator9000 Profile
    </button>
    </div>
  );
};

export default DeleteProfileButton;
