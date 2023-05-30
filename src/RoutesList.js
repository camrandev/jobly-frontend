import React from "react";
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

/**Routes for CompaniesList, JobsList, Homepage, CompanyDetails */
function RoutesList(){
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/companies"
        element={<CompaniesList />}
      />

      <Route
        path="/company/:name"
        element={<CompanyDetails />}
      />

      <Route
        path="/jobs"
        element={<Jobs />}
      />

      {/* <Route
        path="/*"
        element={<Navigate to="/" />}
      /> */}
    </Routes>
  );

}
export default RoutesList;