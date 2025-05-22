import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/inicio';
import Proveedor from './pages/Proveedores';
import Historialcp from './pages/Historial';
import Productos from './pages/Productos';
import Login from './pages/Login';
import Actualizar from './pages/Actualizar';
import Enviarcod from './pages/Enviarcodigo';
import Categorias from './pages/Categorias';


import './App.css';

function App() {
  return (
    <Router>
      <div className='topcontainer'>
        <Sidebar /> {/* Asegúrate que el sidebar tiene la clase "sidebar" en su contenedor */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proveedores" element={<Proveedor />} />
            <Route path="/agregar-productos" element={<h1>Agregar Productos</h1>} />
            <Route path="/compras" element={<Historialcp />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/empleados" element={<h1>Empleados</h1>} />
            <Route path="/ajustes" element={<h1>Ajustes</h1>} />
             <Route path="/login" element={<Login />} />
              <Route path="/actualizar" element={<Actualizar />} />
               <Route path="/enviar" element={<Enviarcod />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
