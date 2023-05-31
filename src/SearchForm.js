import React, { useState } from "react";


 /** DESCRIPTION
*
* Props:
*
* State:
*
* PARENT -> SearchForm -> {CHILDREN}
*/

//will take prop -> handleSubmit
function SearchForm ({ submitSearch }) {
  const [formData, setFormData] = useState({
    searchBy: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
    console.log("Updated search by is", formData.searchBy)
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={() => submitSearch(formData.searchBy)}>
            <div className="input-group">
              <input
                id="searchBy"
                name="searchBy"
                value={formData.searchBy}
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