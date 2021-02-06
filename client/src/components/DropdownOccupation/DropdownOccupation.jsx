import React, { useEffect } from "react";
import M from "materialize-css";
import "./DropdownOccupation.css";

function DropdownOccupation({ category, target, listItem }) {
  const state = {
    occupationChoices: ["Teacher", "Lawyer", "Developer", "Sales", "Realtor"],
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
        {state.occupationChoices.map((occupationChoice) => (
          <li>{occupationChoice}</li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownOccupation;
