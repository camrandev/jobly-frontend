import React, { useState, useContext } from "react";
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

function Profile({ update }) {
  //initial data to be set from the userObject in context
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({ ...user });

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

    update(formData);
  }

  //TODO: handle errors
  //TODO: show sucess messages

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
              value={user.username || ''}
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

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
