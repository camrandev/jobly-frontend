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
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default JobCard;
