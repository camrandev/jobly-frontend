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

  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setData({
        isLoading: false,
        companies: companies.companies,
      });
    }
    getCompanies();
  }, []);

  console.log(data.companies)
  //function to pass down to searchform
  //hit our API with whatever term is in search term
  //set state in this component to the result of that API call

  //loading screen return

  //render function

  return (
    <div>
      <div>
        <SearchForm />
        <CompanyCard />
        {/* {renderFunction()} */}
      </div>
    </div>
  );
}

export default CompaniesList;
