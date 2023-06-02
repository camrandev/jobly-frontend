import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import backgroundImage from "./background-for-jobly.png";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

/** App returns our BrowserRouter with the NavBar component and the RoutesList component
 *
 * Props: None
 *
 * state: token, user{}
 *
 * context: user{} stored in context for use throughout app
 *
 * App -> {Routeslist, NavBar}
 */
function App() {
  // const [token, setToken] = useState(localStorage.getItem("token") || JoblyApi.token);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  /**logs the current user out */
  function logout() {
    JoblyApi.token = "";
    setToken(JoblyApi.token);
    // setUser(null); ADD TO USE EFFECT
    // localStorage.removeItem("token");
  }

  /**logs a user in with proper credentials */
  async function login(formData) {
    console.log("formData is", formData);
    const newToken = await JoblyApi.login(formData);
    // JoblyApi.token = newToken;
    setToken(newToken);
  }

  /**allows a new user to sign up */
  async function signUp(formData) {
    console.log("formData in top level signUp function", formData);
    const newToken = await JoblyApi.signUpUser(formData);
    // JoblyApi.token = newToken;
    setToken(newToken);
  }

  /**allows a user to update their own info when logged in */
  async function update(formData) {
    const username = user.username;
    delete formData.username;
    delete formData.isAdmin;
    delete formData.applications;

    const userInfo = await JoblyApi.updateUser(formData, username);
    console.log("userInfo in update", userInfo);
    setUser({ ...userInfo });
  }

  /**gets user object from API upon receipt of JWT token */
  useEffect(() => {
    async function getUserData() {
      if (token !== "") {
        const { username } = jwt_decode(token);
        console.log("username from token", username);
        console.log("token is", token)
         JoblyApi.token = token
        const userInfo = await JoblyApi.getUserInfo(username);
        // JoblyApi.token = token
        console.log("this is after the await JoblyApi.getUserInfo", userInfo)
        // localStorage.setItem("token", token);
        setUser({ ...userInfo });
      } else {
        setUser(null);
      }
    }
    getUserData();
  }, [token]);

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList login={login} signUp={signUp} update={update} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
