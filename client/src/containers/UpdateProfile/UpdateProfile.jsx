import React from "react";
import axios from "axios";
import ProductForm from "../../components/UpdateProfileForm/UpdateProfileForm";
import "./UpdateProfile.css";
import DeleteProfileButton from "../../components/DeleteProfileButton/DeleteProfileButton";

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
          <div className="card horizontal hoverable">
            <div className="card-stacked">
              <div className="card-content">
                <h5>Name</h5>
              </div>
              <div className="card-content">
                <h5>Favorite Hobby</h5>
              </div>
              <div className="card-content">
                <h5>Favorite Sports Team</h5>
              </div>
              <div className="card-content">
                <h5>Occupation</h5>
              </div>
            </div>
          </div>
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
