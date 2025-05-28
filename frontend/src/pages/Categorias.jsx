import React from "react";
import CategoriaCard from "../components/CategoriaCard";
import Agregarcat from "../components/AgregarcatCard";
import "./Categorias.css";
import useDataCategories from "../hooks/categorias/useDataCategorias";


const CategoriasPage = () => {


const {categoryName,setCategoryName, description,setDescription,agregarCategorias,categories, deleteCategories, updateCategorie, handleEdit, id, setId}=  useDataCategories()
  return (
    <div className="categorias-page">
      <div className="grid-categorias">
        {categories.map((cat, i) => (
          <CategoriaCard
            key={i}
            nombre={cat.categoryName}
            description={cat.description}
            deleteCategories={deleteCategories}
            handleEdit={handleEdit}
            updateCategorie={updateCategorie}
            categories={cat}

            
          />
        ))}
      </div>
      <Agregarcat 
      setCategoryName={setCategoryName}
       setDescription={setDescription}
       categoryName={categoryName}
      description={description}
      agregarCategorias={agregarCategorias}

      />
    </div>
  );
};

export default CategoriasPage;