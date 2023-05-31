import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';
import JoblyApi from './api';

 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> Jobs -> {CHILDREN}
*/

function Jobs () {
  const [allJobs, setAllJobs] = useState({
    isLoading: true,
    jobs: [],
    compName: ""
  });

  useEffect(() => {
    async function getAllJobs(){
      const res = await JoblyApi.getJobs();
      setAllJobs({
        isLoading: false,
        jobs: res
      })
    }
    getAllJobs();
  }, [])

  async function submitSearch(params) {
    console.log('params in submitSearch', params)
    try {
      const res = await JoblyApi.getJobs(params);
      setAllJobs({
        isLoading: false,
        jobs: res,
      });
    } catch (err) {
      window.alert("there was an error with your search");
      return;
    }
  }

  //map over all jobs creating Job getJobs
  if(allJobs.isLoading) return <h1> Loading...</h1>

  return (
    <div>
      <div>
        <SearchForm submitSearch={submitSearch}/>
        <JobCardList jobs={allJobs.jobs}/>
      </div>
    </div>
  )
}

export default Jobs;