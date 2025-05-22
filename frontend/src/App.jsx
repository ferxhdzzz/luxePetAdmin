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
import AgregarProducto from './pages/AgregarProducto';
import Empleados from './pages/Empleados';



import './App.css';

function App() {
  return (
    <Router>
      <div className='topcontainer'>
        <Sidebar /> 
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proveedores" element={<Proveedor />} />
            <Route path="/agregar-productos" element={<AgregarProducto />} />
            <Route path="/compras" element={<Historialcp />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/empleados" element={<Empleados />} />
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
