import { useEffect, useState } from "react";



const useDataRegistro = () => {

   const [id, setId] = useState("")
    const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [  birthday, setBirthday] = useState("");
  const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
      const [email, setEmail] = useState("");
 const [registro, setRegistro]=useState([])
     const API = "https://luxepetadmin.onrender.com/api/customers";

   const fetchRegister = async () => {
    const response = await fetch("https://luxepetadmin.onrender.com/api/customers");
    if (!response.ok) {
      throw new Error("Hubo un error al obtener los registros");
    }
    const data = await response.json();
    setRegistro(data);
    
  
  };
  useEffect(() => {
    fetchRegister();
  }, []);

 const deleteUser = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Hubo un error al eliminar Usuario");
        }

       alert("Usuario eliminado");
        fetchRegister();


        
    };
  
  
    return {
      
       deleteUser,
       id, 
       setId, 
       name,
       setName, 
       lastName,setLastName,
       birthday, 
       setBirthday, 
       userName, setUserName, 
       email, setEmail,
       password,setPassword, 
       registro, setRegistro
       
}

  
  
  
  
  
    };

    export default useDataRegistro;