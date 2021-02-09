import React from "react";
import axios from "axios";
import ProductForm from "../../components/UpdateProfileForm/UpdateProfileForm";
import "./UpdateProfile.css";
import DeleteProfileButton from "../../components/DeleteProfileButton/DeleteProfileButton";
import UserCard from "../../components/UserCard/UserCard";

const UpdateProfile = () => {
  const handleUpdateProfile = (e, userData) => {
    e.preventDefault();
    axios
      .post("/api/user/:id", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  // };
  return (
    <div className="container center-align">
      <div className="row">
        <div className="col s3">
          <UserCard />
        </div>
        <ProductForm handleUpdateProfile={handleUpdateProfile} />
      </div>
      <div className="row right-align">
        <DeleteProfileButton />
      </div>
    </div>
  );
};

export default UpdateProfile;
