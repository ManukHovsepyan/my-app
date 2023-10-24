
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom'; // Renamed the imported Routes as ReactRoutes

import Home from '../views/Home';
import About from '../views/About';
import AllProduct from "../views/AllProducts"


const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path='/all-products' element={<AllProduct />}/>
  </ReactRoutes>
);

export default Routes;
