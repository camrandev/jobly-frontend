import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";
// import { logo1, logo2, logo3 } from '../public/logos';
/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> CompanyCard -> {CHILDREN}
 */

// // Object
// description
// :
// "Language discussion mission soon wait according executive. Financial say husband anyone money politics. Dinner action purpose mouth environment I white."
// handle
// :
// "sellers-bryant"
// logoUrl
// :
// "/logos/logo3.png"
// name
// :
// "Sellers-Bryant"
// numEmployees
// :container
// 369

function CompanyCard({ company }) {
  const logoUrl = process.env.PUBLIC_URL + `${company.logoUrl}`;

  return (
    <div className="col-sm-9 mx-auto container p-3 my-3 text-left company-card bg-white">
      <Link
        to={`/company/${company.handle}`}
        className="text-left text-dark"
        style={{ textDecoration: "none" }}
      >
        <h4 className="company-title text-dark">{company.name}</h4>
        <p className="text-dark">{company.description}</p>
        {logoUrl !== "null" && (
          <div className="image-container">
            <img src={logoUrl} alt="company-logo" className="company-logo px-2 py-2" />
          </div>
        )}
      </Link>
    </div>
  );
}
export default CompanyCard;
