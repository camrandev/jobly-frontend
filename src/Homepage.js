import React from "react";
import './Homepage.css'
/** simple landing page
 *
 * Props: none
 *
 * State: none
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center text-white text-shadow">Jobly</h1>
      <h4 className="text-center text-white">All the jobs in one, convenient place.</h4>
    </div>
  );
}

export default Homepage;
