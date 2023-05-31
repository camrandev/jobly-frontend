import React, { useState, useEffect } from 'react';
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

  return (
    <div>
      <h3>renders list of job cards via map</h3>
      <JobCard />
    </div>
  )
}

export default JobCardList;