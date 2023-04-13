import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
   
        return (
          <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")+' mr-5 font-bold text-xl'}>
            {children}
          </NavLink>
        );

};

export default ActiveLink;