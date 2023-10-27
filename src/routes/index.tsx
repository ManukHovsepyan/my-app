
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom'; // Renamed the imported Routes as ReactRoutes
import Home from '../views/Home';
import About from '../views/About';
import AllProduct from "../views/AllProducts"
import Login from 'views/Login';
import Registration from 'views/Registration';


const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path='/all-products' element={<AllProduct />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/registration' element={<Registration />} />
  </ReactRoutes>
);

export default Routes;
