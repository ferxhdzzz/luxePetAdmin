import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./FormularioProducto.css";

const FormularioProducto = ({ categoriaSeleccionada, onProductoCreado }) => {
  const [cantidad, setCantidad] = useState(1);
  const [talla, setTalla] = useState("S");
  // Eliminamos la variable categorias ya que no se utiliza
  const [proveedores, setProveedores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagenPreview, setImagenPreview] = useState(null);
  const fileInputRef = useRef(null);

  const [productoInfo, setProductoInfo] = useState({
    nameProduct: "",
    price: "",
    productDescription: "",
    amount: 1,
    size: "S",
    idSupplier: "",
    idCategory: "",
    image: null
  });

  // Cargar proveedores al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar proveedores
        const proveedoresResponse = await axios.get('http://localhost:4000/api/suppliers');
        setProveedores(proveedoresResponse.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        alert("Error al cargar proveedores");
      }
    };

    cargarDatos();
  }, []);

  // Actualizar el idCategory cuando cambia la categoría seleccionada en el componente padre
  useEffect(() => {
    // Mapeo de nombres de categoría a valores para la base de datos
    const categoriasMap = {
      "Gatos": "gatos",
      "Perros": "perros",
      "Aves": "aves",
      "Roedores": "roedores",
      "Reptiles": "reptiles"
    };

    if (categoriaSeleccionada && categoriasMap[categoriaSeleccionada]) {
      setProductoInfo(prev => ({
        ...prev,
        idCategory: categoriasMap[categoriaSeleccionada]
      }));
    }
  }, [categoriaSeleccionada]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductoInfo({
      ...productoInfo,
      [name]: value,
    });
  };

  const incrementarCantidad = () => {
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
    setProductoInfo({
      ...productoInfo,
      amount: nuevaCantidad
    });
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      setProductoInfo({
        ...productoInfo,
        amount: nuevaCantidad
      });
    }
  };

  const handleTallaChange = (nuevaTalla) => {
    setTalla(nuevaTalla);
    setProductoInfo({
      ...productoInfo,
      size: nuevaTalla
    });
  };

  const handleImagenChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProductoInfo({
        ...productoInfo,
        image: file
      });

      // Crear preview de la imagen
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagenPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubirImagen = () => {
    fileInputRef.current.click();
  };

  const handleCrearProducto = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Validaciones básicas
      if (!productoInfo.nameProduct || !productoInfo.price || !productoInfo.productDescription || !productoInfo.idSupplier) {
        alert("Por favor complete todos los campos obligatorios");
        setLoading(false);
        return;
      }

      // Crear un FormData para enviar los datos incluyendo la imagen
      const formData = new FormData();
      formData.append('nameProduct', productoInfo.nameProduct);
      formData.append('price', productoInfo.price);
      formData.append('productDescription', productoInfo.productDescription);
      formData.append('amount', productoInfo.amount);
      formData.append('size', productoInfo.size);
      formData.append('idSupplier', productoInfo.idSupplier);
      formData.append('idCategory', productoInfo.idCategory);
      
      if (productoInfo.image) {
        formData.append('image', productoInfo.image);
      }

      // Enviar la solicitud al servidor
      await axios.post('http://localhost:4000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Resetear el formulario
      setProductoInfo({
        nameProduct: "",
        price: "",
        productDescription: "",
        amount: 1,
        size: "S",
        idSupplier: "",
        idCategory: productoInfo.idCategory, // Mantener la categoría actual
        image: null
      });
      setCantidad(1);
      setTalla("S");
      setImagenPreview(null);

      // Notificar al componente padre que se ha creado un producto
      if (onProductoCreado) {
        onProductoCreado();
      }

      alert("Producto creado exitosamente");
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("Error al crear el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario-producto-container">
      <h2>Agregar Producto</h2>
      <form className="formulario-producto" onSubmit={handleCrearProducto}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nameProduct">Nombre del producto</label>
            <input
              type="text"
              id="nameProduct"
              name="nameProduct"
              value={productoInfo.nameProduct}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productoInfo.price}
              onChange={handleInputChange}
              className="form-control"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="form-group cantidad-group">
            <label>Cantidad</label>
            <div className="cantidad-control">
              <button
                type="button"
                className="btn-cantidad btn-dec"
                onClick={decrementarCantidad}
              >
                -
              </button>
              <span className="cantidad-valor">{cantidad}</span>
              <button
                type="button"
                className="btn-cantidad btn-inc"
                onClick={incrementarCantidad}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="idSupplier">Proveedor</label>
            <select
              id="idSupplier"
              name="idSupplier"
              value={productoInfo.idSupplier}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Seleccione un proveedor</option>
              {proveedores.map((proveedor) => (
                <option key={proveedor._id} value={proveedor._id}>
                  {proveedor.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="idCategory">Categoría</label>
            <select
              id="idCategory"
              name="idCategory"
              value={productoInfo.idCategory}
              onChange={handleInputChange}
              className="form-control"
              required
              disabled={true} // Deshabilitado porque se selecciona con los botones de arriba
            >
              <option value="">Seleccione una categoría</option>
              <option value="gatos">Gatos</option>
              <option value="perros">Perros</option>
              <option value="aves">Aves</option>
              <option value="roedores">Roedores</option>
              <option value="reptiles">Reptiles</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group descripcion-group">
            <label htmlFor="productDescription">Descripción</label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={productoInfo.productDescription}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group tallas-subir-group">
            <div className="tallas-group">
              <label>Talla</label>
              <div className="tallas-options">
                <button
                  type="button"
                  className={`talla-btn ${talla === "S" ? "active" : ""}`}
                  onClick={() => handleTallaChange("S")}
                >
                  S
                </button>
                <button
                  type="button"
                  className={`talla-btn ${talla === "M" ? "active" : ""}`}
                  onClick={() => handleTallaChange("M")}
                >
                  M
                </button>
                <button
                  type="button"
                  className={`talla-btn ${talla === "L" ? "active" : ""}`}
                  onClick={() => handleTallaChange("L")}
                >
                  L
                </button>
                <button
                  type="button"
                  className={`talla-btn ${talla === "XL" ? "active" : ""}`}
                  onClick={() => handleTallaChange("XL")}
                >
                  XL
                </button>
              </div>
            </div>
            <div className="subir-imagen-container">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImagenChange}
                accept="image/jpeg,image/png,image/jpg"
                style={{ display: 'none' }}
              />
              <button
                type="button"
                className="btn-subir-imagen"
                onClick={handleSubirImagen}
              >
                Subir Imagen
              </button>
              {imagenPreview && (
                <div className="imagen-preview">
                  <img src={imagenPreview} alt="Vista previa" style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px' }} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="form-row submit-row">
          <button 
            type="submit" 
            className="btn-crear-producto"
            disabled={loading}
          >
            {loading ? "Creando..." : "Crear Producto"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioProducto;
