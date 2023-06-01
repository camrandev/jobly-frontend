import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

/** global navigation bar with NavLinks
 *
 * Props: None
 *
 * State: None
 *
 * App -> JobCardList -> {NavLink*3}
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  function handeLogout() {
    logout();
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>
        {user ? (
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
            <NavLink to="/" className="nav-link" onClick={handeLogout}>
              Log out: {`${user.username}`}
            </NavLink>
          </div>
        ) : (
          <div className="navbar-nav mr-auto">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
