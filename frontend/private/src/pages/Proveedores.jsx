import React from "react";
import CardProveedor from "../components/CardProveedor";

import useDataProveedores from "../hooks/proveedores/useDataProveedores";


const Proveedor = () => {
  const {
    proveedores,
    deleteSupplier
  } = useDataProveedores();

  return (
<div style={{ padding: "40px", backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
    <CardProveedor 
    proveedores={proveedores}
     deleteSupplier={deleteSupplier} />
    </div>
  );
};
export default Proveedor;
