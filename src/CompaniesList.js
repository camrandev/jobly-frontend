import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import userContext from "./userContext";

/** Renders a list of company cards, and a search form
 *
 * Props: None
 *
 * State:
 * - object {isLoading: bool, searchBy: str, companies:[]}
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

  const { user } = useContext(userContext);


  /**
   * get an array of all the companies, then updates data state
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

  if (!user) return <Navigate to="/" />;
  /** Function submitSearch receives string and makes AJAX request using static
   *  method from our JoblyApi class, then sets State or catches error and alerts*/
  async function submitSearch(params) {
    params = !params ? "" : { nameLike: params };
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
  function renderCompanyCards() {
    return data.companies.map((company) => (
      <CompanyCard key={company.handle} company={company} />
    ));
  }

  return (
    <div>
      <div>
        <SearchForm submitSearch={submitSearch} />
        {renderCompanyCards()}
      </div>
      {data.companies.length < 1 && (
        <h3 className="text-white col-6 col mx-auto position-absolute start-50 translate-middle">
          Sorry no results were found!
        </h3>
      )}
    </div>
  );
}

export default CompaniesList;
