// MenuItem.jsx
import React from 'react';

const MenuItem = ({ href, icon, children }) => {
  return (
    <li className={`menu-item icon-${icon}`}>
      <a href={href}>
        <span className={`icon icon-${icon}`}></span>
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
