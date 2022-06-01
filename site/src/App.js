import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dasboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";

function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }


  return (
    <BrowserRouter>
      <div className="wrapper">
        <h1>Application</h1>
          <Routes>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
