import React, { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import { useParams } from 'react-router-dom';


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
  const { name } = useParams();

  return (
    <div>
      <h3>1 CompanyDetails, param is {name}</h3>
      <JobCardList />
    </div>
  )
}

export default CompanyDetails;