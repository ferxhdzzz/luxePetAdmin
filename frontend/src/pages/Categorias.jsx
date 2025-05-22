import React from "react";
import CategoriaCard from "../components/CategoriaCard";
import Agregarcat from "../components/AgregarcatCard";
import "./Categorias.css";

const categorias = [
  { nombre: "Gatos", imagen: "/gato.png" },
  { nombre: "Roedores", imagen: "/conejo.png" },
  { nombre: "Caninos", imagen: "/caninos.png" },
  { nombre: "Reptiles", imagen: "/reptiles.png" },
  { nombre: "Aves", imagen: "/aves.png" }
];

const CategoriasPage = () => {
  return (
    <div className="categorias-page">
      <div className="grid-categorias">
        {categorias.map((cat, i) => (
          <CategoriaCard
            key={i}
            nombre={cat.nombre}
            imagen={cat.imagen}
            onEditar={() => alert("Editar " + cat.nombre)}
            onEliminar={() => alert("Eliminar " + cat.nombre)}
          />
        ))}
      </div>
      <Agregarcat />
    </div>
  );
};

export default CategoriasPage;