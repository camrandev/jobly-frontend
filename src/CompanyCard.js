import React from 'react';
import { Link } from "react-router-dom";

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> CompanyCard -> {CHILDREN}
*/

function CompanyCard ({company}) {

  return (
    <Link to={`/company/exampleCompany`}>
      <h3>CompanyCard</h3>

    </Link>
  )
}

export default CompanyCard;