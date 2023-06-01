import React, { useState } from "react";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> Profile -> {CHILDREN}
 */

function Profile({ handleSignup }) {
  const [formData, setFormData] = useState({});

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    console.log("hello from Profile");
    evt.preventDefault();
    handleSignup(formData);
  }

  return (
    // <div className=" mx-auto position-absolute top-50 start-50 translate-middle container">
      // <h1 className="text-white col" >Profile</h1>
    <div className="col-4 col mx-auto position-absolute top-50 start-50 translate-middle text-black ">
      <h2 className="text-white">Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white py-4 px-4">
      <fieldset disabled>
        <div class="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={formData?.username || ""}
            onChange={handleChange}
            aria-describedby="usernameHelp"
          />
        </div>
        </fieldset>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData?.firstName || ""}
            onChange={handleChange}
            aria-describedby="firstNameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData?.lastName || ""}
            onChange={handleChange}
            aria-describedby="lastNameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData?.email || ""}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
    // </div>
  );
}

export default Profile;
