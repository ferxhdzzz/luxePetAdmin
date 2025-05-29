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
import CardCatAdd from './components/CardCatAdd';
import AgregarProducto from './pages/AgregarProductos/AgregarProducto';
import Empleados from './pages/Empleados';


import Confirmar from './pages/Confirmarcode';

import Admin from './pages/AdministratorProfile';
import Dash from './pages/Dashboard';

import TopBar from './components/TopBar';

import './App.css';

function App() {
  return (
    <Router>
      <TopBar />
      <div className='topcontainer'>

        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/menu" element={<Dash />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proveedores" element={<Proveedor />} />

            <Route path="/agregar-productos" element={<AgregarProducto />} />
            <Route path="/compras" element={<Historialcp />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/empleados" element={<Empleados />} />

    
             <Route path="/login" element={<Login />} />
              <Route path="/actualizar" element={<Actualizar />} />
               <Route path="/enviar" element={<Enviarcod />} />
            <Route path="/confirmarcode" element={<Confirmar />} />

       


            <Route path="/compras" element={<Historialcp />} />
            <Route path="/ajustes" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;