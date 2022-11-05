import React from "react";
import "../styles/notfound.css";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div id="notfound-container">
      <div id="notfound-content">
        <img
          id="notfound-image"
          alt=""
          src="https://drive.google.com/uc?export=view&id=1KAHR3DPbxrjGDYuc01F_9APlboj4beKN"
        />
        <h1>You seem to be lost.</h1>
        <p>Kindly use any of these links to get back.</p>
        <div id="nav-items-container">
        <NavLink
          className="nav-item"
          to="/"
          end
        >
          ABOUT
        </NavLink>
        <span id="stroke">|</span>
        <NavLink
          className="nav-item"
          to="/githubrepos"
        >
          PORTFOLIO
        </NavLink>
        <span id="stroke">|</span>
        <NavLink
          className="nav-item"
          to="/contactme"
        >
          CONTACT-ME
        </NavLink>
      </div>
      </div>
      
    </div>
  );
}

export default NotFound;
