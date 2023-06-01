import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import backgroundImage from "./background-for-jobly.png";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

//TODO: use effect effect, watching token, when token changes, do something
/** App returns our BrowserRouter with the NavBar component and the RoutesList component */
function App() {
  const [token, setToken] = useState(JoblyApi.token);
  const [user, setUser] = useState(null);
  console.log("user is,", user);

  //TODO: state setter function to prop drill-> pass to routeslist, NavBar
  function logout() {
    JoblyApi.token = "";
    setToken(JoblyApi.token);
    setUser(null);
  }

  async function login(formData) {
    console.log("hi from login");
    //pass form data to JoblyApi.login(formData)
    const newToken = await JoblyApi.login(formData);
    JoblyApi.token = newToken;
    setToken(newToken);
    //save to state and also to JoblyApi.token
  }

  useEffect(() => {
    async function getUserData() {
      if (token !== "") {
        const { username } = jwt_decode(token);
        console.log("username from token", username);
        const userInfo = await JoblyApi.getUserInfo(username);
        setUser({ ...userInfo });
      }
    }
    getUserData();
  }, [token]);

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList login={login} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
