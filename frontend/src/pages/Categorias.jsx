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
            
            deleteCategories={deleteCategories}
            handleEdit={handleEdit}
            updateCategorie={updateCategorie}
            categories={cat}

            
          />
        ))}
      </div>
      <Agregarcat 
      id={id}
      setId={setId}
      setCategoryName={setCategoryName}
       setDescription={setDescription}
       categoryName={categoryName}
      description={description}
      agregarCategorias={agregarCategorias}
       handleEdit={handleEdit}
             updateCategorie={updateCategorie}
             categories={categories}

      />
    </div>
  );
};

export default CategoriasPage;