import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeController from '../pages/home/home.controller';

export function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeController />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
