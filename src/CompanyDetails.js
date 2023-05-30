import React, { useState, useEffect } from 'react';
import JobCardList from './JobCardList';


 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> CompanyDetails -> {CHILDREN}
*/

function CompanyDetails () {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <h3>CompanyDetails</h3>
      <JobCardList/>
    </div>
  )
}

export default CompanyDetails;