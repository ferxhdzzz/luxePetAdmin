import React, { useState } from 'react';
import Layout from '../../components/Layout';
import CardCatAdd from '../../components/CardCatAdd';
import ProductosVendidos from '../../components/ProductosVendidos';
import FormularioProducto from '../../components/Productos/FormularioProducto';
import ModalEditarProducto from '../../components/Productos/ModalEditarProducto';
import ModalConfirmarEliminarProducto from '../../components/Productos/ModalConfirmarEliminarProducto';
import { useProductos } from '../../hooks/useProductos';
import "./AgregarProducto.css";

function AgregarProducto() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Gatos");
  const [productoCreado, setProductoCreado] = useState(false);

  // Usar el hook personalizado useProductos para gestionar los productos
  const {
    formData,
    modalEditarVisible,
    modalEliminarVisible,
    productoEditar,
    productoEliminar,
    actualizarProducto,
    eliminarProducto,
    abrirModalEditar,
    cerrarModalEditar,
    abrirModalEliminar,
    cerrarModalEliminar,
    handleInputChange
  } = useProductos();

  // Esta función se llamará cuando se cree un nuevo producto
  const handleProductoCreado = () => {
    setProductoCreado(!productoCreado); // Cambiar el estado para forzar la recarga
  };

  const handleActualizarProducto = async () => {
    if (productoEditar) {
      const result = await actualizarProducto(productoEditar._id, formData);
      if (result) {
        cerrarModalEditar();
        // Forzar la recarga de los productos
        handleProductoCreado();
      }
    }
  };

  const handleEliminarProducto = async (id) => {
    await eliminarProducto(id);
    // Forzar la recarga de los productos
    handleProductoCreado();
  };

  return (
    <Layout>
      <div className="agregar-producto-container">
        {/* Componente 1: Selector de categorías de animales */}
        <CardCatAdd
          seleccionada={categoriaSeleccionada}
          onSeleccionar={setCategoriaSeleccionada}
        />
        
        {/* Componente 2: Productos más vendidos */}
        <ProductosVendidos 
          categoriaSeleccionada={categoriaSeleccionada} 
          key={productoCreado ? "reloaded" : "initial"} // Forzar recarga cuando se crea un producto
          onEditar={abrirModalEditar}
          onEliminar={abrirModalEliminar}
        />
        
        {/* Componente 3: Formulario para agregar producto */}
        <FormularioProducto 
          categoriaSeleccionada={categoriaSeleccionada}
          onProductoCreado={handleProductoCreado}
        />

        {/* Modales para edición y eliminación */}
        <ModalEditarProducto
          visible={modalEditarVisible}
          onClose={cerrarModalEditar}
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleActualizarProducto}
        />
        
        <ModalConfirmarEliminarProducto
          visible={modalEliminarVisible}
          onClose={cerrarModalEliminar}
          onConfirm={handleEliminarProducto}
          producto={productoEliminar}
        />
      </div>
    </Layout>
  );
}

export default AgregarProducto;