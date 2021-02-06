import React, { useState, useEffect } from "react";
import M from "materialize-css";
// import "./DropdownOccupation.css";

function DropdownSports({ category, target, sportChoice }) {
  const [sport, setSport] = useState("");

  const state = {
    sportChoices: ["New England Patriots", "Atlanta United", "Atlanta Falcons"],
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
        {state.sportChoices.map((sportChoice) => (
          <li>{sportChoice}</li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownSports;
