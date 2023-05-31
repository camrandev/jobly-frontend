import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> CompanyDetails -> {CHILDREN}
 */

function CompanyDetails() {
  const { name } = useParams();

  const [company, setCompany] = useState({
    isLoading: true,
    data: null,
  });

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


  return (
    <div className="container my-5 mx-auto text-left">
      <h4>{company.data.name}</h4>
      <p>{company.data.description}</p>

      <JobCardList jobs ={company.data.jobs}/>
    </div>
  );
}

export default CompanyDetails;
