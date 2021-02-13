import React from "react";
import axios from "axios";
import "./DeleteProfileButton.css";
import { Link } from "react-router-dom";
function DeleteProfileButton() {
  // const { id } = useParams();
  const id = localStorage.getItem("user");
  const deleteProfile = () => {
    if (id) {
      axios
        .delete(`/api/users/delete-user/${id}`)
        .then(() => {
          alert("profile successfully deleted!");
          localStorage.clear();
          // history.push("/welcome");
          console.log("profile deleted");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <Link to="/">
        <button
          className="btn hoverable"
          id="delete-button"
          // to="/welcome"
          onClick={() => {
            deleteProfile();
            // history.push("/welcome");
          }}
        >
          Delete Insulterator9000 Profile
        </button>
      </Link>
    </div>
  );
}
export default DeleteProfileButton;
