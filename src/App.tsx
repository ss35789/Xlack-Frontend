import React from "react";
import "./App.css";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Mainpage from "./pages/Mainpage";
import { rt } from "./variable/cookie";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage />} />
          </Routes>
          {!rt ? (
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/main" element={<Mainpage />} />
              <Route path="/" element={<Navigate replace to="/main" />} />
            </Routes>
          )}
        </Router>
      </>
    </div>
  );
}

export default App;
