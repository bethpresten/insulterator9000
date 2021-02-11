import React, { useContext } from "react";
import axios from "axios";
import "./DeleteProfileButton.css";
import globalUser from "../../utils/globalUser";
import { useParams, useHistory} from "react-router-dom";


function DeleteProfileButton() {
  // const { id } = useParams();
  const id = localStorage.getItem('user')
  // const history = useHistory();

  const deleteProfile = () => {
    axios
      .delete(`/delete-user/${id}`)
      .then(() => {
        alert("profile successfully deleted!");
        localStorage.clear();
        // history.push("/welcome");
        console.log("profile deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  
  
  return (
    <div>
      <button
        className="btn hoverable"
        id="delete-button"
        to = "/welcome"
        onClick={() => {
          deleteProfile();
        }}
       
      >
        Delete Insulterator9000 Profile
    </button>
    </div>
  );
};

export default DeleteProfileButton;
