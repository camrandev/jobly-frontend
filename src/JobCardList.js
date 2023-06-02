import React from "react";
import JobCard from "./JobCard";

/** renders list of individual JobCards
 *
 * Props: Array of Job objects
 *
 * State: None
 *
 * {CompanyDetails, Jobs} -> JobCardList -> {JobCard}
 */

function JobCardList({ jobs }) {
  function renderJobCards() {
    return jobs.map((job) => {
      return <JobCard key={job.id} job={job} />;
    });
  }
  return <div>{renderJobCards()}</div>;
}

export default JobCardList;
