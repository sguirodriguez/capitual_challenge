import React from "react";
import HomeController from "../pages/home/home.controller";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeController />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
