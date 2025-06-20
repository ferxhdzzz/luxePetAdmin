import React, { useState, useEffect, useMemo } from "react";
import CardProducto from "./CardProductos";
import "./ProductosVendidos.css";
import axios from "axios";

const ProductosVendidos = ({ categoriaSeleccionada, onEditar, onEliminar }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapeo de categorías a sus identificadores en la base de datos usando useMemo
  const categoriasMap = useMemo(() => ({
    "Gatos": "gatos",
    "Perros": "perros",
    "Aves": "aves",
    "Roedores": "roedores",
    "Reptiles": "reptiles"
  }), []);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        // Obtener productos filtrados por categoría
        const categoriaId = categoriasMap[categoriaSeleccionada] || "gatos";
        const response = await axios.get(`http://localhost:4000/api/products/category/${categoriaId}`);
        
        setProductos(response.data);
        setError(null);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos.");
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, [categoriaSeleccionada, categoriasMap]);

  const handleEditar = (producto) => {
    // Si existe una función onEditar proporcionada por el padre, la usamos
    if (onEditar) {
      onEditar(producto);
    } else {
      console.log("Editar producto:", producto);
      // Funcionalidad por defecto si no hay función externa
    }
  };

  const handleEliminar = async (producto) => {
    // Si existe una función onEliminar proporcionada por el padre, la usamos
    if (onEliminar) {
      onEliminar(producto);
    } else {
      try {
        // Confirmar con el usuario si quiere eliminar el producto
        if (window.confirm(`¿Estás seguro de eliminar el producto ${producto.nameProduct}?`)) {
          await axios.delete(`http://localhost:4000/api/products/${producto._id}`);
          // Actualizar la lista de productos eliminando el producto
          setProductos(productos.filter(p => p._id !== producto._id));
          alert("Producto eliminado correctamente");
        }
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        alert("Error al eliminar el producto");
      }
    }
  };

  return (
    <div className="productos-vendidos-container">
      <h2>Productos de {categoriaSeleccionada}</h2>
      
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : productos.length === 0 ? (
        <p>No hay productos disponibles para esta categoría.</p>
      ) : (
        <div className="productos-grid">
          {productos.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={{
                id: producto._id,
                name: producto.nameProduct,
                price: producto.price,
                imagen: producto.image || "/placeholder-product.jpg"
              }}
              onEditar={() => handleEditar(producto)}
              onEliminar={() => handleEliminar(producto)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductosVendidos;
