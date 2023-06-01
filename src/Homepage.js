import React from "react";
import './Homepage.css'
import { Link } from "react-router-dom";
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

      <div className=" d-flex justify-content-center ">
        {/* <div className="col border"> */}
          <Link to="/login" className="btn btn-primary mr-5">
          Log in
          </Link>
        {/* </div>
        <div className="col"> */}
          <Link to="/signup" className="btn btn-primary ml-5">
          Sign up
          </Link>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Homepage;
