import React, { useState } from "react";
import CardCatAdd from "../components/CardCatAdd";
import ProductosVendidos from "../components/ProductosVendidos";
import FormularioProducto from "../components/FormularioProducto";
import "./AgregarProducto.css";

function AgregarProducto() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Gatos");

  return (
    <div className="agregar-producto-container">
      {/* Componente 1: Selector de categorías de animales */}
      <CardCatAdd
        seleccionada={categoriaSeleccionada}
        onSeleccionar={setCategoriaSeleccionada}
      />
      
      {/* Componente 2: Productos más vendidos */}
      <ProductosVendidos />
      
      {/* Componente 3: Formulario para agregar producto */}
      <FormularioProducto />
    </div>
  );
}

export default AgregarProducto;
