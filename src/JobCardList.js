import React from 'react';
import JobCard from './JobCard';

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> JobCardList -> {CHILDREN}
*/

function JobCardList ({jobs}) {
  function renderJobCards() {
    return jobs.map((job) => {
      return <JobCard key={job.id} job={job} />;
    });
  }
  return (
    <div>
      {renderJobCards()}
    </div>
  )
}

export default JobCardList;