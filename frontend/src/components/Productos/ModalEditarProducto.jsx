import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ModalEditarProducto.css";

const ModalEditarProducto = ({ 
  visible, 
  onClose, 
  formData, 
  onChange, 
  onSubmit,
  esNuevo = false
}) => {
  const [categorias] = useState([
    { id: 'gatos', nombre: 'Gatos' },
    { id: 'perros', nombre: 'Perros' },
    { id: 'aves', nombre: 'Aves' },
    { id: 'roedores', nombre: 'Roedores' },
    { id: 'reptiles', nombre: 'Reptiles' }
  ]);
  
  const [proveedores, setProveedores] = useState([]);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cargar proveedores al montar el componente
  useEffect(() => {
    const cargarProveedores = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/suppliers');
        setProveedores(response.data);
      } catch (error) {
        console.error("Error al cargar proveedores:", error);
      }
    };

    if (visible) {
      cargarProveedores();
      // Si hay una imagen y estamos editando, mostrar preview
      if (formData.image && !esNuevo) {
        setImagenPreview(formData.image);
      }
    }
  }, [visible, formData.image, esNuevo]);

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar campos requeridos
    const { nameProduct, price, productDescription, idSupplier, idCategory } = formData;
    if (!nameProduct || !price || !productDescription || !idSupplier || !idCategory) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }
    
    setLoading(true);
    onSubmit(formData)
      .finally(() => {
        setLoading(false);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Crear URL temporal para mostrar preview
      const imageUrl = URL.createObjectURL(file);
      setImagenPreview(imageUrl);
      
      // Pasar el archivo al state del formulario
      onChange({
        target: {
          name: 'image',
          value: file
        }
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{esNuevo ? "Agregar Producto" : "Editar Producto"}</h2>
          <button className="btn-cerrar" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nameProduct">Nombre del producto</label>
              <input
                type="text"
                id="nameProduct"
                name="nameProduct"
                value={formData.nameProduct || ''}
                onChange={onChange}
                className="form-control"
                required
                placeholder="Nombre del producto"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price || ''}
                onChange={onChange}
                className="form-control"
                required
                placeholder="Precio"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="amount">Cantidad</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount || 1}
                onChange={onChange}
                className="form-control"
                placeholder="Cantidad"
                min="1"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="size">Talla</label>
              <select
                id="size"
                name="size"
                value={formData.size || 'S'}
                onChange={onChange}
                className="form-control"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="idCategory">Categoría</label>
              <select
                id="idCategory"
                name="idCategory"
                value={formData.idCategory || ''}
                onChange={onChange}
                className="form-control"
                required
              >
                <option value="">Seleccione una categoría</option>
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="idSupplier">Proveedor</label>
              <select
                id="idSupplier"
                name="idSupplier"
                value={formData.idSupplier || ''}
                onChange={onChange}
                className="form-control"
                required
              >
                <option value="">Seleccione un proveedor</option>
                {proveedores.map(proveedor => (
                  <option key={proveedor._id} value={proveedor._id}>
                    {proveedor.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="productDescription">Descripción</label>
              <textarea
                id="productDescription"
                name="productDescription"
                value={formData.productDescription || ''}
                onChange={onChange}
                className="form-control"
                required
                placeholder="Descripción del producto"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group image-upload-group">
              <label htmlFor="image">Imagen del producto</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="form-control-file"
                accept="image/jpeg,image/png,image/jpg"
              />
              {imagenPreview && (
                <div className="image-preview">
                  <img 
                    src={imagenPreview} 
                    alt="Vista previa" 
                    className="preview-img" 
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn-guardar"
              disabled={loading}
            >
              {loading ? "Guardando..." : (esNuevo ? "Crear Producto" : "Guardar Cambios")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarProducto;
