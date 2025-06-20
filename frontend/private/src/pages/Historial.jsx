import React from "react";
import CardHistorial from "../components/CardHistorialcp";
import useDataUsers from "../hooks/registros/useDataRegistros";


const User = () => {
  const {
    deleteUser,
    registro
  } = useDataUsers();

 



  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
      <CardHistorial
       
        registro={registro}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default User;
