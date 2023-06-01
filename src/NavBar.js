import React from "react";
import { NavLink } from "react-router-dom";

/** global navigation bar with NavLinks
 *
 * Props: None
 *
 * State: None
 *
 * App -> JobCardList -> {NavLink*3}
 */
function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Jobly</NavLink>
        <div className="navbar-nav mr-auto">
          <NavLink to="/companies" className="nav-link">
            Companies
          </NavLink>
          <NavLink to="/jobs" className="nav-link">
            Jobs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
