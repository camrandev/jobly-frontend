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

  function logout(){
    //setState for user object back to nothing and State for token to empty string
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Jobly</NavLink>
        { // if userObject.username ?
          <div className="navbar-nav mr-auto">
          <NavLink to="/companies" className="nav-link">
            Companies
          </NavLink>
          <NavLink to="/jobs" className="nav-link">
            Jobs
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
          <NavLink to="/" className="nav-link" onClick={logout}>
            Log out
          </NavLink>
        </div>
        }
      </div>
      :
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/signup" className="nav-link">
        Sign Up
      </NavLink>

    </nav>
  );
}
export default NavBar;
