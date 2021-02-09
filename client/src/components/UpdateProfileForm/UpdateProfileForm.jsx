import React, { useState } from "react";
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
            <input id="occupation" type="text" className="validate" />
            <label for="occupation">Occupation</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="hobby" type="text" className="validate" />
            <label for="hobby">Name one hobby</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="sport" type="text" className="validate" />
            <label for="Favorite Sports Team">Favorite Sports Team</label>
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
