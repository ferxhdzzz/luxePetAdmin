import { useEffect, useState } from "react";



const useDataProveedores = () => {

   const [id, setId] = useState("")
    const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [  managerName, setManagerName] = useState("");
  const [phone, setPhone] = useState("");
 const [proveedores, setProveedores]=useState([])
     const API = "https://luxepetadmin.onrender.com/api/suppliers";

   const fetchSuppliers = async () => {
    const response = await fetch("https://luxepetadmin.onrender.com/api/suppliers");
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorías");
    }
    const data = await response.json();
    setProveedores(data);
    
  
  };
  useEffect(() => {
    fetchSuppliers();
  }, []);

 const deleteSupplier = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Hubo un error al eliminar Proveedor");
        }

       alert("Proveedor eliminado");
        fetchSuppliers();


        
    };
  
  
    return {
      
       deleteSupplier,
       id, 
       setId, 
       name,
       setName, 
       address,setAddress,
       managerName, 
       setManagerName, 
       phone, 
       setPhone, 
       proveedores, 
       setProveedores
       
}

  
  
  
  
  
    };

    export default useDataProveedores;