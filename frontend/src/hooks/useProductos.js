import { useState } from 'react';
import axios from 'axios';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Estado para el modal de editar
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);
  const [formData, setFormData] = useState({});
  
  // Estado para el modal de eliminar
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [productoEliminar, setProductoEliminar] = useState(null);

  // Obtener todos los productos
  const obtenerProductos = async (categoria = 'todos') => {
    try {
      setLoading(true);
      let url = 'http://localhost:4000/api/products';
      
      // Si hay una categoría seleccionada (que no sea 'todos'), filtramos por esa categoría
      if (categoria !== 'todos') {
        url = `http://localhost:4000/api/products/category/${categoria}`;
      }

      const response = await axios.get(url);
      setProductos(response.data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      setError('No se pudieron cargar los productos. Intente de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  // Crear un nuevo producto
  const crearProducto = async (nuevoProducto) => {
    try {
      setLoading(true);
      
      // Crear un FormData para enviar los datos incluyendo la imagen
      const formData = new FormData();
      
      // Agregar todos los campos del producto al FormData
      Object.keys(nuevoProducto).forEach(key => {
        if (key === 'image' && nuevoProducto[key] instanceof File) {
          formData.append(key, nuevoProducto[key]);
        } else if (key !== 'image' || typeof nuevoProducto[key] === 'string') {
          formData.append(key, nuevoProducto[key]);
        }
      });

      await axios.post('http://localhost:4000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Recargar la lista de productos
      obtenerProductos();
      setError(null);
      return true;
    } catch (err) {
      console.error('Error al crear producto:', err);
      setError('Error al crear el producto. Intente de nuevo.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar un producto existente
  const actualizarProducto = async (id, datosActualizados) => {
    try {
      setLoading(true);
      
      // Crear un FormData para enviar los datos incluyendo la imagen
      const formData = new FormData();
      
      // Agregar todos los campos del producto al FormData
      Object.keys(datosActualizados).forEach(key => {
        if (key === 'image' && datosActualizados[key] instanceof File) {
          formData.append(key, datosActualizados[key]);
        } else if (key !== 'image' || typeof datosActualizados[key] === 'string') {
          formData.append(key, datosActualizados[key]);
        }
      });

      await axios.put(`http://localhost:4000/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Recargar la lista de productos
      obtenerProductos();
      setError(null);
      return true;
    } catch (err) {
      console.error('Error al actualizar producto:', err);
      setError('Error al actualizar el producto. Intente de nuevo.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Eliminar un producto
  const eliminarProducto = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      
      // Actualizar la lista local de productos
      setProductos(productos.filter(producto => producto._id !== id));
      setError(null);
      
      // Cerrar el modal de eliminar
      cerrarModalEliminar();
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      setError('Error al eliminar el producto. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Funciones para manejar el modal de editar
  const abrirModalEditar = (producto) => {
    setProductoEditar(producto);
    setFormData({
      nameProduct: producto.nameProduct,
      price: producto.price,
      productDescription: producto.productDescription,
      amount: producto.amount,
      size: producto.size,
      idSupplier: producto.idSupplier,
      idCategory: producto.idCategory,
      image: producto.image
    });
    setModalEditarVisible(true);
  };

  const cerrarModalEditar = () => {
    setModalEditarVisible(false);
    setProductoEditar(null);
    setFormData({});
  };

  // Funciones para manejar el modal de eliminar
  const abrirModalEliminar = (producto) => {
    setProductoEliminar(producto);
    setModalEliminarVisible(true);
  };

  const cerrarModalEliminar = () => {
    setModalEliminarVisible(false);
    setProductoEliminar(null);
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return {
    productos,
    loading,
    error,
    formData,
    modalEditarVisible,
    modalEliminarVisible,
    productoEditar,
    productoEliminar,
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    abrirModalEditar,
    cerrarModalEditar,
    abrirModalEliminar,
    cerrarModalEliminar,
    handleInputChange
  };
};
