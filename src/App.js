import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";
import useTokenLocalStorage from './useTokenLocalStorage';


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
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useTokenLocalStorage();
  const [user, setUser] = useState(null);

  /**logs the current user out */
  function logout() {
    setIsLoading(false);
    setToken("");
    setUser(null);
  }

  /**logs a user in with proper credentials */
  async function login(formData) {
    const newToken = await JoblyApi.login(formData);
    setToken(newToken);
  }

  /**allows a new user to sign up */
  async function signUp(formData) {
    const newToken = await JoblyApi.signUpUser(formData);
    setToken(newToken);
  }

  /**allows a user to update their own info when logged in */
  async function update({username, lastName, email, firstName}) {
    const userInfo = await JoblyApi.updateUser({lastName, email, firstName}, username);
    setUser({ ...userInfo });
  }

  /**gets user object from API upon receipt of JWT token */
  useEffect(() => {
    async function getUserData() {
      if (token !== "") {
        const { username } = jwt_decode(token);
        JoblyApi.token = token;
        const userInfo = await JoblyApi.getUserInfo(username);
        setIsLoading(false);
        setUser({ ...userInfo });
      } else {
        setIsLoading(false);
      }
    }
    getUserData();
  }, [token]);

  if (isLoading) return <h1 className="position-absolute top-50 start-50 text-white">Loading....</h1>;

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
