import React, { useState } from "react";
import DeleteProfileButton from "../DeleteProfileButton/DeleteProfileButton";

const UpdateProfileForm = ({ handleUpdateProfile, handleDeleteProfile }) => {
  const [occupation, setOccupation] = useState("");
  const [sports, setSports] = useState("");
  const [hobbies, setHobbies] = useState("");

  return (
    <>
      <form
        className="col s12"
        onSubmit={(e) => {
          handleUpdateProfile(e, {
            occupation,
            sports,
            hobbies,
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
              id="sports"
              type="text"
              name="sports"
              value={sports}
              onChange={(e) => {
                setSports(e.target.value);
              }}
            />
            <label htmlFor="sports">Favorite Sports Team</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Hobbies"
              id="hobbies"
              type="text"
              name="hobbies"
              value={hobbies}
              onChange={(e) => {
                setHobbies(e.target.value);
              }}
            />
            <label htmlFor="hobbies">Hobbies</label>
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
            <DeleteProfileButton handleDeleteProfile={handleDeleteProfile} />
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfileForm;
