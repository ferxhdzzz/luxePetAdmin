import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/inicio';
import Proveedor from './pages/Proveedores';
import Historialcp from './pages/Historial';
import Productos from './pages/Productos';
import Login from './pages/Login';
import Actualizar from './pages/Actualizar';
import Admin from './pages/AdministratorProfile';
import Dash from './pages/Dashboard';


import './App.css';

function App() {
  return (
    <Router>
      <div className='topcontainer'>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/menum" element={<Dash />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proveedores" element={<Proveedor />} />
            <Route path="/compras" element={<Historialcp />} />
            <Route path="/ajustes" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/actualizar" element={<Actualizar />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;