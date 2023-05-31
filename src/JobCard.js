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
  console.log("job from JobCard", job)

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{job.title}</h5>
        {job.companyName && <h6 class="card-title">{job.companyName}</h6>}
        {job.salary && <p className="card-text mb-0">Salary: {job.salary}</p>}
        {job.equity && <p className="card-text mb-0">Equity: {job.equity}</p>}
      </div>
    </div>
  );
}

export default JobCard;
