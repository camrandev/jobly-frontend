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
    searchBy: "",
    companies: [],
  });
  console.log("data.companies is>>>", data.companies);

  async function getCompanies() {
    const companies = await JoblyApi.getCompanies();
    setData({
      isLoading: false,
      searchBy: "",
      companies: companies,
    });
  }

  useEffect(() => {
    getCompanies();
  }, []);

  //function to pass down to searchform
  async function submitSearch(params) {
    params = !params.nameLike ? '' : params
    try {
      const res = await JoblyApi.getCompanies(params);
      setData({
        isLoading: false,
        searchBy: "",
        companies: res,
      });
    } catch (err) {
      window.alert("there was an error with your search");
      return;
    }
  }
  //hit our API with whatever term is in search term
  //set state in this component to the result of that API call

  //loading screen return
  if (data.isLoading) return <h1>Loading....</h1>;

  //render function
  function renderInfo() {
    return data.companies.map((company) => {
      return <CompanyCard company={company} />;
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
