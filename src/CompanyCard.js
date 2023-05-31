import React from 'react';
import { Link } from "react-router-dom";
//import the file path

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> CompanyCard -> {CHILDREN}
*/

function CompanyCard ({ company }) {
  const imagePath = `../public${company.logoUrl}`
  console.log('company', company)

  return (
    <div className="container my-5 mx-auto text-left">
      <Link
        to={`companies/:name`}
        className="text-center text-dark company-card"
        style={{ textDecoration: 'none' }}
      >
        <h1 className="company-title">{company.name}</h1>
        <p>{company.description}</p>
        <img src={`${imagePath}`} alt="" />
      </Link>
    </div>
  );
}

export default CompanyCard;