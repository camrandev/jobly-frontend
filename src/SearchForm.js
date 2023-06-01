import React, { useState } from "react";

/** Reusable search form component
 *
 * Props:
 * - submitSearch()
 *
 * State:
 * - formData{}
 *
 * Jobs -> SearchForm
 */

function SearchForm({ submitSearch }) {
  const [formData, setFormData] = useState({
    searchTerm:"",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    submitSearch(formData.searchTerm);
  }

  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="searchTerm"
                name="searchTerm"
                value={formData.searchTerm}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter search term..."
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
