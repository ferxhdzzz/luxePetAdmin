
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
        {/* Ajuste aquí: dejamos espacio para el sidebar fijo */}
        <div style={{
          marginLeft: '240px',  // deja espacio para el sidebar
          padding: '2rem',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: '#a7dcfb', // fondo igual que Inicio.css
          minHeight: '100vh'
        }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<h1>Productos</h1>} />
            <Route path="/proveedores" element={<h1>Proveedores</h1>} />
            <Route path="/agregar-productos" element={<h1>Agregar Productos</h1>} />
            <Route path="/compras" element={<h1>Compras</h1>} />
            <Route path="/categorias" element={<h1>Categorías</h1>} />
            <Route path="/empleados" element={<h1>Empleados</h1>} />
            <Route path="/ajustes" element={<h1>Ajustes</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App;