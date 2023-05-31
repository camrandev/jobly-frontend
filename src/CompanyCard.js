import React from 'react';
import { Link } from "react-router-dom";
import './CompanyCard.css'

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> CompanyCard -> {CHILDREN}
*/

function CompanyCard ({ company }) {

  return (
    <div className="container my-5 mx-auto text-left company-card">
      <Link
        to={`companies/:name`}
        className="text-left text-dark"
        style={{ textDecoration: 'none' }}
      >
        <h1 className="company-title text-dark">{company.name}</h1>
        <p className="text-dark">{company.description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;