
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom'; // Renamed the imported Routes as ReactRoutes

import Home from '../views/Home';
import About from '../views/About';


const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </ReactRoutes>
);

export default Routes;
