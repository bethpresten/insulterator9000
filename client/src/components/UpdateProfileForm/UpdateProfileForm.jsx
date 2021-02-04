import React, { useState } from "react";
import "./UpdateProfileForm.css";
// import DeleteProfileButton from "../DeleteProfileButton/DeleteProfileButton";

const UpdateProfileForm = ({ handleUpdateProfile }) => {
  const [occupation, setOccupation] = useState("");
  const [sport, setSport] = useState("");
  const [hobby, setHobby] = useState("");

  return (
    <>
      <form
        className="col s9"
        onSubmit={(e) => {
          handleUpdateProfile(e, {
            occupation,
            sport,
            hobby,
          });
        }}
      >
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Occupation"
              id="title"
              type="text"
              name="occupation"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            />
            <label htmlFor="occupation">Occupation</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Favorite Sports Team"
              id="sport"
              type="text"
              name="sport"
              value={sport}
              onChange={(e) => {
                setSport(e.target.value);
              }}
            />
            <label htmlFor="sport">Favorite Sports Team</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Favorite Hobby"
              id="hobby"
              type="text"
              name="hobby"
              value={hobby}
              onChange={(e) => {
                setHobby(e.target.value);
              }}
            />
            <label htmlFor="hobby">Favorite Hobby</label>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <button
              className="waves-effect waves-light btn hoverable"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfileForm;
