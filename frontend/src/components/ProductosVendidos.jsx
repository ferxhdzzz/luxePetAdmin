import React from "react";
import CardProducto from "./CardProductos";
import "./ProductosVendidos.css";

// Datos de ejemplo para los productos más vendidos
const productosVendidos = [
  {
    id: 1,
    name: "Pato para perro",
    price: 10.00,
    imagen: "/PatoParaPerro.jpg",
  },
  {
    id: 2,
    name: "Comida para gatos",
    price: 10.50,
    imagen: "/ComidaParaGato.jpg",
  },
  {
    id: 3,
    name: "Pelota para perro",
    price: 10.00,
    imagen: "/PelotaParaPerro.jpg",
  },
  {
    id: 4,
    name: "Hueso para perro",
    price: 10.00,
    imagen: "/HuesoParaPerro.jpg",
  }
];

const ProductosVendidos = () => {
  const handleEditar = (producto) => {
    console.log("Editar producto:", producto);
  };

  const handleEliminar = (producto) => {
    console.log("Eliminar producto:", producto);
  };

  return (
    <div className="productos-vendidos-container">
      <h2>Productos más vendidos</h2>
      <div className="productos-grid">
        {productosVendidos.map((producto) => (
          <CardProducto
            key={producto.id}
            producto={producto}
            onEditar={handleEditar}
            onEliminar={handleEliminar}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductosVendidos;
