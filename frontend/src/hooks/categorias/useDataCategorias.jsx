
import { useEffect, useState } from "react";



const useDataCategories = () => {
  const [id, setId] = useState("");
    const [categoryName, setCategoryName] = useState("");
 const [description, setDescription] = useState("");
 const [categories, setCategories]=useState([])
 const API = "http://localhost:4000/api/category";
 
  const fetchCategories = async () => {
    const response = await fetch("http://localhost:4000/api/category");
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorías");
    }
    const data = await response.json();
    setCategories(data);
    console.log(data, "desde hook")
  
  };

    useEffect(() => {
    fetchCategories();
  }, []);

    const agregarCategorias = async (e) => {
          e.preventDefault();
        const formCategorie = 
        {
        categoryName: categoryName,
        description: description
        }
        
try {
        const response = await fetch("http://localhost:4000/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json",},
      body: JSON.stringify(formCategorie),
    });
    if (!response.ok) {
      throw new Error("Error al guardar el cliente");
    }

 alert("Categoria guardada");
    await fetchCategories(); // ✅ recarga la lista correctamente
   

     setCategoryName("");
    setDescription("");


} catch (error) {
    console.error("Error al agregar categoria:", error);
  }
};


 const deleteCategories= async (id) => {
   
  try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Hubo un error al eliminar la categoria");
      }
alert("categoria eliminada");
    fetchCategories();

    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

const updateCategorie = (dataCategorie) => {
    setId(dataCategorie._id);
    setCategoryName(dataCategorie.categoryName);
    setDescription(dataCategorie.description);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const editCategorie = {
     categoryName:categoryName,
      description: description,
    
    };

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editCategorie),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la categoria");
      }

      alert("Cliente actualizado");
      setId("");
      setCategoryName("");
      setDescription("");
      fetchCategories();
    } catch (error) {
      console.error("Error al editar categoria:", error);
    }
  };






    return {categoryName,setCategoryName, description,setDescription,agregarCategorias,categories, deleteCategories, updateCategorie, handleEdit, id, setId}


 
};

export default useDataCategories;