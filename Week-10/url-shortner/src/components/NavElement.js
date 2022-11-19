import React from "react";
import "./nav.css";
// import "./Home";
// import "./About"

import { NavLink } from "react-router-dom";

function NavElement() {
  return (
    <nav>
      <NavLink to="/">
        <h3>HOME</h3>
      </NavLink>
      <NavLink to="/about">
        <h3>ABOUT</h3>
      </NavLink>
    </nav>
  );
}

export default NavElement;
