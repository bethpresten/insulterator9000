import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import M from "materialize-css/dist/js/materialize.min.js";
function Navbar() {
  useEffect(() => {
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  });
  return (
    <div className="navbar-extended">
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="navbar-brand left"
            style={{ marginLeft: "20px" }}
          >
            Insulterator9000
          </Link>
          <a
            href="#"
            className="right sidenav-trigger"
            data-target="mobile-nav"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
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
          </ul>
          <ul id="mobile-nav" className="sidenav">
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
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
