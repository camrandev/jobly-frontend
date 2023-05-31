import React, { useState, useEffect } from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom"
// import "./NavBar.css"
// import 'bootstrap/dist/css/bootstrap.css';
// Navigation navbar navbar-expand-md


function NavBar(){
  //TODO: update this NavLinks change appropriately
  let activeStyle = {
    fontWeight: "900",
    color: "red",
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
        <div className="navbar-nav mr-auto">
          <NavLink to="/companies" className="nav-link">Companies</NavLink>
          <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
        </div>
      </div>
    </nav>
  );

}
export default NavBar;