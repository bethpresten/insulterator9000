import React from "react";
import axios from "axios";
import "./DeleteProfileButton.css";

const DeleteProfileButton = async id => {
  console.log("ID", id);
  try {
    const response = await axios.delete(`/api/users/${id}`);
    console.log(response);
    fetchingData();
  } catch (error) {
    console.log(error);
  };
  return (
        <button
          className="btn hoverable"
          onClick={() => DeleteProfileButton(id)}
          id="delete-button"
        >
          Delete Insulterator9000 Profile
        </button>
      );
};
// const handleDeleteProfile = (e, userData) => {
//   e.preventDefault();
//   axios
//     .delete("/api/user/:id", userData)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// // };

// // function DeleteProfileButton() {
//   return (
//     <button
//       className="btn hoverable"
//       onClick={handleDeleteProfile}
//       id="delete-button"
//     >
//       Delete Insulterator9000 Profile
//     </button>
//   );
// };

export default DeleteProfileButton;
