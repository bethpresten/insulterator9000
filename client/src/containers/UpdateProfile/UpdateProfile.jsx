import React from "react";
import axios from "axios";
import ProductForm from "../../components/UpdateProfileForm/UpdateProfileForm";

const UpdateProfile = () => {
  const handleFormSubmit = (e, userData) => {
    e.preventDefault();
    axios
      .post("/api/user", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s3">
          <div className="card horizontal hoverable">
            <div className="card-stacked">
              <div className="card-content">
                <h5>Name</h5>
              </div>
              <div className="card-content">
                <h5>Hobbies</h5>
              </div>
              <div className="card-content">
                <h5>Favorite Sports Teams</h5>
              </div>
              <div className="card-content">
                <h5>Occupation</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col sm9">
          <ProductForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
