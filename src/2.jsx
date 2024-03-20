import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // นำเข้า BrowserRouter, Routes และ Route
import Menu from './Menu';
import Home from './Home';
import Services from './Services';
import Pricing from './Pricing';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;