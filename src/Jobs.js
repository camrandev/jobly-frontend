import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

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
function Jobs() {
  const [allJobs, setAllJobs] = useState({
    isLoading: true,
    jobs: [],
  });

  const [errors, setErrors] = useState([]);

  /** Gets all the jobs via AJAX request then saves them to state*/
  useEffect(() => {
    async function getAllJobs() {
      const jobs = await JoblyApi.getJobs();
      setAllJobs({
        isLoading: false,
        jobs: jobs,
      });
    }
    getAllJobs();
  }, []);

  /**  submitSearch receives a string and makes an AJAX request via our JoblyApi
   *  class and saves the results to state or alerts with error.*/
  async function submitSearch(params) {
    params = !params ? "" : { title: params };
    try {
      const jobs = await JoblyApi.getJobs(params);
      setAllJobs({
        isLoading: false,
        jobs: jobs,
      });
    } catch (err) {
      setErrors({
        hasError: true,
        errorMessage: err.message,
      });
    }
  }

  if (allJobs.isLoading) return <h1> Loading...</h1>;
  if (errors.errorMessage) return <h1>error: {errors.errorMessage}</h1>;

  return (
    <div>
      <div>
        <SearchForm submitSearch={submitSearch} />
        <JobCardList jobs={allJobs.jobs} />
        {allJobs.jobs.length < 1 && (
          <h3 className="text-white col-6 col mx-auto position-absolute start-50 translate-middle">
            Sorry no results were found!
          </h3>
        )}
      </div>
    </div>
  );
}

export default Jobs;
