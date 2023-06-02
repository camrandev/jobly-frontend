import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import userContext from "./userContext";

/** View/edit info for the current user
 *
 * Props:
 * - update()
 *
 * State:
 * - formData
 * - errors
 *
 * RoutesList -> Profile
 *
 */

//NOTE: better to be explicit and pass in user?
function Profile({ update }) {
  const { user } = useContext(userContext);
  //TODO: destructure needed fields from user object
  const [formData, setFormData] = useState({ ...user });
  const [errors, setErrors] = useState([]);
  const [updated, setUpdated] = useState(false);

  if (!user) return <Navigate to="/" />;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleError(error) {
    console.log("error in handleErrors is...", error);
    setErrors([...error]);
  }

  //NOTE: case to be made that this form should handle APIrequest directly
  async function handleSubmit(evt) {
    console.log("hello from Profile");
    evt.preventDefault();
    try {
      await update(formData);
    } catch (error) {
      handleError(error);
      return;
    }
    handleError([]);
    setUpdated(true);
  }

  return (
    <div className="col-6 col mx-auto position-absolute top-50 start-50 translate-middle text-black ">
      <h2 className="text-white">Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white py-4 px-4">
        <fieldset disabled>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              value={user.username || ""}
              onChange={handleChange}
              aria-describedby="usernameHelp"
              aria-required="true"
              required
            />
          </div>
        </fieldset>
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
            aria-required="true"
            required
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
            aria-required="true"
            required
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
            //TODO: remove optional changing, conditionals
            value={formData?.email || ""}
            onChange={handleChange}
            aria-describedby="emailHelp"
            aria-required="true"
            required
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
        {updated && <p className="alert alert-success">Updated Successfully</p>}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
