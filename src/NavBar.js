import React, { useState, useEffect } from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom"
// import "./NavBar.css"

function NavBar(){
  //TODO: update this NavLinks change appropriately
  let activeStyle = {
    fontWeight: "900",
    color: "red",
  };

  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
      </ul>
    </nav>
  );

}
export default NavBar;