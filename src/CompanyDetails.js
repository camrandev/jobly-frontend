import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/** Logical component that holds list of all jobs for a given company
 *
 * Props: none
 *
 * State:
 * - object {isLoading: bool, data:null}
 *
 * Effects:
 * - after first render, send API request for company by name
 *
 * RoutesList -> CompanyDetails -> {JobCardList}
 */

function CompanyDetails() {
  const [company, setCompany] = useState({
    isLoading: true,
    data: null,
  });

  const { name } = useParams();

  /**  after first render, send API request for company by name, setState*/
  useEffect(() => {
    async function getCompany() {
      const res = await JoblyApi.getCompany(name);
      setCompany({
        isLoading: false,
        data: res,
      });
    }
    getCompany();
  }, []);

  if (company.isLoading) return <h1>loading....</h1>;
  // add another conditional that checks state to see if theres erros, if so,
  //show some UI

  return (
    <div className="container my-5 mx-auto text-left">
      <h4>{company.data.name}</h4>
      <p>{company.data.description}</p>

      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetails;
