import React from 'react';
// import './sideMenu.css';

const MenuButton = ({ isOpen, toggleMenu, color, buttonColorOpen }) => {
  return (
    // <button className={ !isOpen ? color : buttonColorOpen } onClick={toggleMenu}>
    <button   className={isOpen ? (buttonColorOpen || color) : color} onClick={toggleMenu}>
      {isOpen ? 'Close' : 'Open'}
    </button>
  );
};

export default MenuButton;
