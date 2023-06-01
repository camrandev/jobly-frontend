import "./App.css";
import React from "react";
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import backgroundImage from './background-for-jobly.png';

/** App returns our BrowserRouter with the NavBar component and the RoutesList component */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
