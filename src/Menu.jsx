// Menu.jsx
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <MenuItem href="/" icon="home" className="menu-item home">Home</MenuItem>
        <MenuItem href="/services" icon="services" className="menu-item services">Services</MenuItem>
        <MenuItem href="/pricing" icon="pricing" className="menu-item pricing">Pricing</MenuItem>
        <MenuItem href="/blog" icon="blog" className="menu-item blog">Blog</MenuItem>
      </ul>
    </nav>
  );
};

export default Menu;
