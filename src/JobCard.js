import React from "react";
// { useState, useEffect }

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> JobCard -> {CHILDREN}
 */
// {id: 119, title: 'Oceanographer', salary: null, equity: '0.097'}
function JobCard({ job }) {
  return (
    <div className="col-sm-9 mx-auto my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{job.title}</h5>
          {job.companyName && <h6 className="card-title">{job.companyName}</h6>}
          {job.salary && <p className="card-text mb-0">Salary: {job.salary}</p>}
          {job.equity && <p className="card-text mb-0">Equity: {job.equity}</p>}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
