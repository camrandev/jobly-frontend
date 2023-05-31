import React from 'react';
import { Link } from "react-router-dom";
import './CompanyCard.css'
// import { logo1, logo2, logo3 } from '../public/logos';
 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> CompanyCard -> {CHILDREN}
*/

function CompanyCard ({ company }) {
  const logoUrl = process.env.PUBLIC_URL + `${company.logoUrl}`;

  return (
    <div className="container my-5 mx-auto text-left company-card">
      <Link
        to={`companies/:name`}
        className="text-left text-dark"
        style={{ textDecoration: 'none' }}
      >
        <h4 className="company-title text-dark">{company.name}</h4>
        <p className="text-dark">{company.description}</p>
        {logoUrl !== "null" && (
          <div className="image-container">
            <img src={logoUrl} alt="company-logo" className="company-logo" />
          </div>
        )}
      </Link>
    </div>
  );
}
export default CompanyCard;