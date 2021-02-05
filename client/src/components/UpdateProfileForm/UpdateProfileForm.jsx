import React, { useState } from "react";
// import DeleteProfileButton from "../DeleteProfileButton/DeleteProfileButton";
import DropdownOccupation from "../DropdownOccupation/DropdownOccupation";
import DropdownSports from "../DropdownOccupation/DropdownOccupation";
import DropdownHobbies from "../DropdownHobbies.jsx/DropdownHobbies";

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
        <div className="col s4">
          <DropdownOccupation
            category="Occupation"
            target="dropdown1"
            // choices={occupationChoices}
            type="text"
            name="occupation"
            value={occupation}
            onChange={(e) => {
              setOccupation(e.target.value);
            }}
          />
        </div>
        <div className="col s4">
          <DropdownSports
            category="Sports Team"
            target="dropdown2"
            // choices={sportChoices}
            type="text"
            name="sport"
            value={sport}
            onChange={(e) => {
              setSport(e.target.value);
            }}
          />
        </div>
        <div className="col s4">
          <DropdownHobbies
            category="Hobby"
            target="dropdown3"
            // choices={hobbyChoices}
            // id="hobby"
            type="text"
            name="hobby"
            value={hobby}
            onChange={(e) => {
              setHobby(e.target.value);
            }}
          />
        </div>
      </form>

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
    </>
  );
};

export default UpdateProfileForm;
