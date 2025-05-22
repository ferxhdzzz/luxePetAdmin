import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import {
  FaBox, FaTruck, FaPlusCircle, FaShoppingCart,
  FaTags, FaUsers, FaCog,
  FaCompass
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logop">
       <NavLink to="/">
          <img src="/luxe.svg" alt="Logo" />
        </NavLink>
      </div>

      <nav className="menu">
      <NavLink to="/menu" className="nav-link">
          <FaCompass className="icon" /> <span>Menu</span>
        </NavLink>
        <NavLink to="/productos" className="nav-link">
          <FaBox className="icon" /> <span>Productos</span>
        </NavLink>
        <NavLink to="/proveedores" className="nav-link">
          <FaTruck className="icon" /> <span>Proveedores</span>
        </NavLink>
        <NavLink to="/agregar-productos" className="nav-link">
        <FaPlusCircle className="icon" /> <span>Agregar productos</span>
        </NavLink>
        <NavLink to="/compras" className="nav-link">
          <FaShoppingCart className="icon" /> <span>Registros</span>
        </NavLink>
        <NavLink to="/categorias" className="nav-link">
          <FaTags className="icon" /> <span>Categorías</span>
        </NavLink>
        <NavLink to="/empleados" className="nav-link">
          <FaUsers className="icon" /> <span>Empleados</span>
        </NavLink>
        
      </nav>

      <div className="settings">
        <NavLink to="/ajustes" className="nav-link">
          <FaCog className="icon" /> <span>Ajustes</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;