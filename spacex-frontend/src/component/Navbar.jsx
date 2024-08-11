import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={"/home"}>home</NavLink>

      <NavLink to={"/login"}>logout</NavLink>
    </nav>
  );
}

export default Navbar;
