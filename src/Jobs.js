import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';
import JoblyApi from './api';

 /** DESCRIPTION
*Jobs uses useState and useEffect to make an AJAX request for all the jobs and
saves them in state then passes the jobs to JobCardList and passes the function
 to change the state of jobs to the SearchForm.

* Props: none
*
* State:
* - object {isLoading: bool, jobs: []}
*
* RoutesList -> Jobs -> {SearchForm, JobCardList}
*/
function Jobs () {
  const [allJobs, setAllJobs] = useState({
    isLoading: true,
    jobs: []
  });
  /** Gets all the jobs via AJAX request then saves them to state*/
  useEffect(() => {
    async function getAllJobs(){
      // jobs > res
      const res = await JoblyApi.getJobs();
      setAllJobs({
        isLoading: false,
        jobs: res
      })
    }
    getAllJobs();
  }, [])

  /**  submitSearch receives a string and makes an AJAX request via our JoblyApi
   *  class and saves the results to state or alerts with error.*/
  async function submitSearch(params) {
    console.log('params in submitSearch', params)
    try {
            // jobs > res
      const res = await JoblyApi.getJobs(params);
      setAllJobs({
        isLoading: false,
        jobs: res,
      });
    } catch (err) {
      // alert  < component
      window.alert("there was an error with your search");
    }
  }

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