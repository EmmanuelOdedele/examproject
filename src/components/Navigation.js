import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navigation() {
  return (
    <nav>
      <img
        id="logo-image"
        alt="Emmanuel O."
        src="https://drive.google.com/uc?export=view&id=1JmY-H5gqcXDQzr3s7K2vHkVI6HxUG_DG"
      />
      <NavLink className="nav-items-container">
        <NavLink
          className="nav-item"
          style={({ isActive }) =>
            isActive
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
          to="/"
          end
        >
          ABOUT
        </NavLink>
        <NavLink
          className="nav-item"
          style={({ isActive }) =>
            isActive
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
          to="/githubrepos"
        >
          PORTFOLIO
        </NavLink>
      </NavLink>
    </nav>
  );
}

export default Navigation;
