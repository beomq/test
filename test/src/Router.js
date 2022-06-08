import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Sign from './Sign';
import Nav from './Nav';
import Shop from './Shop';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Sign' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
