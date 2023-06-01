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
 * renders via Route Element: { Homepage, CompaniesList, CompanyDetails, Jobs}
 */
/**Routes for CompaniesList, JobsList, Homepage, CompanyDetails */
function RoutesList({login, signUp}) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<CompaniesList />} />

      <Route path="/company/:name" element={<CompanyDetails />} />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignUpForm signUp={signUp}/>} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default RoutesList;
