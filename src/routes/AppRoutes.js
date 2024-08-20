import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Html from '../components/Html';
import Dashboard from '../components/HtmlComponents/Dashboard';
import Settings from '../components/HtmlComponents/Settings';
import Css from '../components/Css';
import JavaScript from '../components/JavaScript';
import Algorithms from '../components/Algorithms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Html />} />
      <Route path='/css' element={<Css />} />
      <Route path='/js' element={<JavaScript />} />
      <Route path='/algo' element={<Algorithms />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
