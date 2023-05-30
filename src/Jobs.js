import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> Jobs -> {CHILDREN}
*/

function Jobs () {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <h3>Jobs</h3>
      <div>
        <SearchForm/>
        <JobCardList/>
      </div>
    </div>
  )
}

export default Jobs;