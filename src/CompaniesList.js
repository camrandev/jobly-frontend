import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

/** Renders a list of company cards, and a search form
 *
 * Props: None
 *
 * State:
 * - object {isLoading: bool, searchBy: str, companys:[]}
 *
 * Effects:
 * - after first render, send API request for list of companies
 *
 * RoutesList -> CompaniesList -> {SearchForm, CompanyCard}
 */

function CompaniesList() {
  const [data, setData] = useState({
    isLoading: true,
    companies: [],
  });

  /**
   * get an array of all the companies,
    then sets State
   */
  async function getCompanies() {
    const companies = await JoblyApi.getCompanies();
    setData({
      isLoading: false,
      companies: companies,
    });
  }
  /** useEffect runs our getCompanies function*/
  useEffect(() => {
    getCompanies();
  }, []);

  /** Function submitSearch receives string and makes AJAX request using static
   *  method from our JoblyApi class, then sets State or catches error and alerts*/
  async function submitSearch(params) {
    try {
      const res = await JoblyApi.getCompanies(params);
      setData({
        isLoading: false,
        companies: res,
      });
    } catch (err) {
      window.alert("there was an error with your search");
      return;
    }
  }

  if (data.isLoading) return <h1>Loading....</h1>;

  /** renderInfo receives nothing, returns instances of the CompanyCard component*/
  function renderInfo() {
    return data.companies.map((company) => {
      return <CompanyCard key={company.handle} company={company} />;
    });
  }

  return (
    <div>
      <div>
        <SearchForm submitSearch={submitSearch} />
        {renderInfo()}
      </div>
    </div>
  );
}

export default CompaniesList;
