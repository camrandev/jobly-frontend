import React, { useState, useEffect } from 'react';

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
      <JobCardList/>
    </div>
  )
}

export default JobCardList;