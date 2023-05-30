import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> CompaniesList -> {CHILDREN}
*/

function CompaniesList () {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>

      <div>
        <SearchForm/>
        <CompanyCard/>
      </div>
    </div>
  )
}

export default CompaniesList;