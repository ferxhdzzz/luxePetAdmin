
import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/inicio';

/*import Productos from './pages/Productos';
import Proveedores from './pages/Proveedores';
import AgregarProductos from './pages/AgregarProductos';
import Compras from './pages/Compras';
import Categorias from './pages/Categorias';
import Empleados from './pages/Empleados';
import Ajustes from './pages/Ajustes';*/

function App() {
  return (
    <>
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '2rem' }}>
          <Routes>
    
          <Route path="/" element={<Inicio/>} />
            <Route path="/productos" element={<h1 />} />
            <Route path="/proveedores" element={<h1 />} />
            <Route path="/agregar-productos" element={<h1 />} />
            <Route path="/compras" element={<h1 />} />
            <Route path="/categorias" element={<h1 />} />
            <Route path="/empleados" element={<h1 />} />
            <Route path="/ajustes" element={<h1 />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App;