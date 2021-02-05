import React, { useState, useEffect } from "react";
import M from "materialize-css";
// import "./DropdownOccupation.css";
import "../DropdownMenuChoices/DropdownMenuChoices";
// import DropdownMenuChoices from "../DropdownMenuChoices/DropdownMenuChoices";

function DropdownHobbies({ category, target, hobbyChoice }) {
  const [hobby, setHobby] = useState();
  const state = {
    hobbyChoices: ["Running", "Peloton", "Comic Books"],
  };

  useEffect(() => {
    let elems = document.querySelectorAll(".dropdown-trigger");
    console.log(elems);
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }, []);

  return (
    <div className="input-field col s12">
      <a className="dropdown-trigger btn" data-target={target}>
        {category}
      </a>
      <ul id={target} className="dropdown-content">
        {state.hobbyChoices.map((hobbyChoice) => (
          <li>{hobbyChoice}</li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownHobbies;
