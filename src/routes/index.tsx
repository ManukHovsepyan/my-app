
import React, { lazy, Suspense } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Loading from 'components/Loading';

const Home = lazy(() => import('views/Home'));
const Login = lazy(() => import('views/Login'));
const AllProduct = lazy(() => import('views/AllProducts'));
const Registration = lazy(() => import('views/Registration'))
const About = lazy(() => import('views/About'))

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
