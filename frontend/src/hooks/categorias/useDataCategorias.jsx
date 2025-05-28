import { useEffect, useState } from "react";



const useDataCategories = () => {

  const [nameCategory, setNameCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([])


  const fetchCategories = async () => {
    const response = await fetch("http://localhost:4000/api/category");
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorías");
    }
    const data = await response.json();
    setCategories(data);

  };


  const agregarCategorias = () => {
    alert("categoria agregarCategorias")

    const formCategorie =
    {
      categoryName: nameCategory,
      description: description
    }


    const response = fetch("http://localhost:4000/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formCategorie),
    });

    alert("categoria guardada")

    fetchCategories()



  }

  useEffect(() => {
    fetchCategories();
  }, []);


  return { setNameCategory, setDescription, nameCategory, description, agregarCategorias, categories }



};

export default useDataCategories;