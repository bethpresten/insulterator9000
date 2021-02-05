import React, { useEffect } from "react";
import M from "materialize-css";
import "./UpdateDropdown.css";

function UpdateDropdown({ category, target, listItem }) {
  //   const [state, setState] = useState();

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
        <li>{listItem}</li>
      </ul>
    </div>
  );
}

export default UpdateDropdown;
