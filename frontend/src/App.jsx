import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/inicio';
import './App.css';

function App() {
  return (
    <Router>
      <div className='topcontainer'>
        <Sidebar /> {/* Asegúrate que el sidebar tiene la clase "sidebar" en su contenedor */}
        <div className="main-content">
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
  );
}

export default App;
