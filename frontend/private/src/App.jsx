// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Páginas públicas
import Login from './pages/Login';
import Enviarcod from './pages/Enviarcodigo';

// Páginas privadas
import Inicio from './pages/inicio';
import Proveedor from './pages/Proveedores';
import Historialcp from './pages/Historial';
import Productos from './pages/Productos';
import Actualizar from './pages/Actualizar';
import Categorias from './pages/Categorias';
import AgregarProducto from './pages/AgregarProductos/AgregarProducto';
import Empleados from './pages/Empleados';
import Admin from './pages/AdministratorProfile';
import Dash from './pages/Dashboard';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas - SIN navegación */}
          <Route path="/login" element={<Login />} />
          <Route path="/enviar" element={<Enviarcod />} />

          {/* Rutas privadas - cada página individual maneja su navegación */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/menu" element={<Dash />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proveedores" element={<Proveedor />} />
            <Route path="/agregar-productos" element={<AgregarProducto />} />
            <Route path="/compras" element={<Historialcp />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/empleados" element={<Empleados />} />
            <Route path="/actualizar" element={<Actualizar />} />
            <Route path="/ajustes" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;