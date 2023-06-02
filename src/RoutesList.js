import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import Jobs from "./Jobs";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Profile from "./Profile";

/** Holds all route element for the application
 *
 * Props: None
 *
 * State: None
 *
 * App -> JobCardList ->
 * renders via Route Element:
 * {Homepage, CompaniesList, CompanyDetails, Jobs, login, sign up}
 */
function RoutesList({login, signUp, update}) {
  return (
    <Routes>
      {/* //TODO: easier to protect routes here -> wrap route els with
      current user conditional  */}
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<CompaniesList />} />

      <Route path="/company/:name" element={<CompanyDetails />} />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignUpForm signUp={signUp}/>} />
      <Route path="/profile" element={<Profile update={update} />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default RoutesList;
