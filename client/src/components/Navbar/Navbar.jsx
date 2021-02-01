import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="navbar-brand left"
            style={{ marginLeft: "20px" }}
          >
            {/* <img
              src="https://previews.123rf.com/images/blamb/blamb1407/blamb140700837/29643265-a-cartoon-boy-sticks-out-his-tongue-as-an-insult-.jpg"
              alt="boy with tongue out"
              style={{
                height: "50px",
                width: "50px",
                marginRight: "5px",
                // marginTop: "5px",
              }}
            /> */}
            Insulterator9000
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className="nav-link"
                activeClassName="active"
                id="hide"
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
