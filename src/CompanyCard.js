import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** presentational card that will show info for one company
 *
 * Props:
 * -company{}
 *
 * State:
 * -None
 *
 * CompanyDetails -> CompanyCard -> {Link}
 */


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
