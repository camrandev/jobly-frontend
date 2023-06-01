import React, { useState, useEffect } from "react";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> SignUpForm -> {CHILDREN}
 */

function SignUpForm({ handleSignup }) {
  const [formData, setFormData] = useState({});

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    console.log("hello from SignUpForm");
    evt.preventDefault();
    handleSignup(formData);
  }

  return (
    <div className="col-4 mx-auto position-absolute top-50 start-50 translate-middle text-white">
      <h2 className="text-white">Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={formData?.password || ""}
            onChange={handleChange}
            aria-describedby="passwordHelp"
          />
        </div>
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
  );
}

export default SignUpForm;
