import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        HomePage
      </NavLink>
      <NavLink to="githubrepos">Repositories</NavLink>
    </nav>
  );
}

export default Navigation;
