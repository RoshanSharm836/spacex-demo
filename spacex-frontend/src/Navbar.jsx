import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/login"}>login</NavLink>
    </nav>
  );
}

export default Navbar;
