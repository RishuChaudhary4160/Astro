import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/router/index.jsx";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
