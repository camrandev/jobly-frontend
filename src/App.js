import "./App.css";
import React, { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import backgroundImage from "./background-for-jobly.png";
import userContext from "./userContext";
import JoblyApi from "./api";

//TODO: use effect effect, watching token, when token changes, do something
/** App returns our BrowserRouter with the NavBar component and the RoutesList component */
function App() {
  const [token, setToken] = useState(JoblyApi.token);
  const [user, setUser] = useState(null);

//TODO: state setter function to prop drill-> pass to routeslist, NavBar
function logout() {
  console.log('hi from logout')
}

function login() {
  console.log('hi from login')
}

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout}/>
          <RoutesList login={login}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
