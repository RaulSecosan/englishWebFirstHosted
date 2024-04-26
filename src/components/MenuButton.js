import React from 'react';
// import './sideMenu.css';

const MenuButton = ({ isOpen, toggleMenu, color }) => {
  return (
    <button className={color} onClick={toggleMenu}>
      {isOpen ? 'Close' : 'Open'}
    </button>
  );
};

export default MenuButton;
