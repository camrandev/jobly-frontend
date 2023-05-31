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

  //map all the jobs into JobCard components

  return (
    <div>
      <h3>1 CompanyDetails, param is {name}</h3>
    </div>
  )
}

export default CompanyDetails;