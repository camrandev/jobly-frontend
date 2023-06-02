import React, { useState, useEffect, useContext } from "react";
import userContext from "./userContext";
import { Navigate, useNavigate } from "react-router-dom";

/** Sign up as a new user
 *
 * Props:
 * - signUp()
 *
 * State:
 * - formData {}
 * - errors[]
 *
 * RoutesList -> SignUpForm
 */

//TODO: see feedback in LoginForm
function SignUpForm({ signUp }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);

  const { user } = useContext(userContext);

  function handleError(error) {
    console.log("error in handleErrors is...", error);
    setErrors([...error]);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(formData);
      setErrors([]);
    } catch (error) {
      handleError(error);
    }
  }

  if (user) return <Navigate to="/" />;

  return (
    <div className="col-4 mx-auto position-absolute top-50 start-50 translate-middle text-white">
      <h2 className="text-white">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
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
            name="password"
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
            name="firstName"
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
            name="lastName"
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
            name="email"
            type="email"
            className="form-control"
            id="email"
            value={formData?.email || ""}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        {errors.length > 0 && (
          <div className="alert alert-danger">
            {errors.map((error, index) => (
              <p key={index} className="mb-0 small">
                Error: {error}
              </p>
            ))}
          </div>
        )}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
