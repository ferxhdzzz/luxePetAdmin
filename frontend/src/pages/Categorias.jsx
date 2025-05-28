import React from "react";
import CategoriaCard from "../components/CategoriaCard";
import Agregarcat from "../components/AgregarcatCard";
import "./Categorias.css";
import useDataCategories from "../hooks/categorias/useDataCategorias";

const categorias = [
  { nombre: "Gatos", imagen: "/gato.png" },
  { nombre: "Roedores", imagen: "/conejo.png" },
  { nombre: "Caninos", imagen: "/caninos.png" },
  { nombre: "Reptiles", imagen: "/reptiles.png" },
  { nombre: "Aves", imagen: "/aves.png" }
];

const CategoriasPage = () => {


const {setNameCategory,setDescription, nameCategory,description,agregarCategorias, categories}=  useDataCategories()
  return (
    <div className="categorias-page">
      <div className="grid-categorias">
        {categories.map((cat, i) => (
          <CategoriaCard
            key={i}
            nombre={cat.categoryName}
            imagen={cat.imagen}
            description={cat.description}
            onEditar={() => alert("Editar " + cat.nombre)}
            onEliminar={() => alert("Eliminar " + cat.nombre)}
          />
        ))}
      </div>
      <Agregarcat 
      setNameCategory={setNameCategory}
       setDescription={setDescription}
       nameCategory={nameCategory}
      description={description}
      agregarCategorias={agregarCategorias}

      />
    </div>
  );
};

export default CategoriasPage;