import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CardProducto from '../components/CardProductos';
import ModalEditarProducto from '../components/Productos/ModalEditarProducto';
import ModalConfirmarEliminarProducto from '../components/Productos/ModalConfirmarEliminarProducto';
import { useProductos } from '../hooks/useProductos';
import './Productos.css';

const AdminProducts = () => {
  // Usar el hook personalizado useProductos

  const {
    productos,
    loading,
    error,
    formData,
    modalEditarVisible,
    modalEliminarVisible,
    productoEditar,
    productoEliminar,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto,
    abrirModalEditar,
    cerrarModalEditar,
    abrirModalEliminar,
    cerrarModalEliminar,
    handleInputChange
  } = useProductos();

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  // Eliminamos los estados relacionados con agregar productos

  // Mapeo de categorías para filtrado
  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'gatos', nombre: 'Gatos' },
    { id: 'perros', nombre: 'Perros' },
    { id: 'aves', nombre: 'Aves' },
    { id: 'roedores', nombre: 'Roedores' },
    { id: 'reptiles', nombre: 'Reptiles' }
  ];

  // Cargar productos cuando cambia la categoría
  useEffect(() => {
    obtenerProductos(categoriaSeleccionada);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriaSeleccionada]);

  // Eliminamos las funciones para el modal de agregar producto

  const handleActualizarProducto = async () => {
    if (productoEditar) {
      const result = await actualizarProducto(productoEditar._id, formData);
      if (result) {
        cerrarModalEditar();
      }
    }
  };

  return (
    <Layout>
      <div className="productos-page">
        <div className="productos-header">
          <h1>Productos</h1>
        </div>

        {/* Filtro por categorías */}
        <div className="categorias-filter">
          {categorias.map(cat => (
            <button
              key={cat.id}
              className={`categoria-btn ${categoriaSeleccionada === cat.id ? 'active' : ''}`}
              onClick={() => setCategoriaSeleccionada(cat.id)}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : productos.length === 0 ? (
          <div className="no-productos">No hay productos disponibles en esta categoría.</div>
        ) : (
          <div className="admin-container">
            {productos.map((producto) => (
              <div key={producto._id}>
                <CardProducto
                  producto={{
                    id: producto._id,
                    name: producto.nameProduct,
                    price: producto.price,
                    imagen: producto.image || '/placeholder-product.jpg'
                  }}
                  onEditar={() => abrirModalEditar({
                    _id: producto._id,
                    nameProduct: producto.nameProduct,
                    price: producto.price,
                    productDescription: producto.productDescription,
                    amount: producto.amount,
                    size: producto.size,
                    idSupplier: producto.idSupplier,
                    idCategory: producto.idCategory,
                    image: producto.image
                  })}
                  onEliminar={() => abrirModalEliminar({
                    _id: producto._id,
                    nameProduct: producto.nameProduct,
                    price: producto.price,
                    productDescription: producto.productDescription,
                    idCategory: producto.idCategory,
                    image: producto.image
                  })}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modal para editar producto */}
        <ModalEditarProducto
          visible={modalEditarVisible}
          onClose={cerrarModalEditar}
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleActualizarProducto}
        />

        {/* Modal para confirmar eliminación */}
        <ModalConfirmarEliminarProducto
          visible={modalEliminarVisible}
          onClose={cerrarModalEliminar}
          onConfirm={eliminarProducto}
          producto={productoEliminar}
        />

        {/* Eliminamos el modal para agregar nuevo producto */}
      </div>
    </Layout>
  );
};

export default AdminProducts;