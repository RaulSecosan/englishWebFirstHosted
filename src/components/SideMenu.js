import React, { useState } from 'react';
import './sideMenu.css';
import {  Link } from 'react-router-dom';

 // Stilurile tale CSS pentru meniu
import MenuButton from './MenuButton'; // Componenta butonului de meniu

const SideMenu = ({color}) => {
  const [isOpen, setIsOpen] = useState(false); // Starea pentru a ține evidența dacă meniul este deschis sau nu

  // Funcție pentru a deschide sau închide meniul
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(color)

  return (
    <div>
    {/* color={'menu-button'} */}
    <MenuButton color={color} isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <MenuButton color={'menu-buttonOpen'} isOpen={isOpen} toggleMenu={toggleMenu} />
        
            <ul className="list" >
                <li onClick={toggleMenu}><Link to='/'>Home</Link></li>
                <li onClick={toggleMenu}><Link to='/jobs'>Jobs</Link></li>
                <li onClick={toggleMenu}><Link to='/animals'>Animals</Link></li>
                <li onClick={toggleMenu}><Link to='/words'>Just Words</Link></li>
                <li onClick={toggleMenu}><Link to='/list'>Lista</Link></li>
           
            </ul>  
        </div>
    </div>
    
  );
};

export default SideMenu;
