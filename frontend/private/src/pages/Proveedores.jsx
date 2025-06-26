// pages/Proveedores.jsx
import React from "react";
import Layout from "../components/Layout";
import CardProveedor from "../components/CardProveedor";
import useDataProveedores from "../hooks/proveedores/useDataProveedores";

const Proveedor = () => {
  const {
    proveedores,
    deleteSupplier
  } = useDataProveedores();

  return (
    <Layout>
      <div style={{ padding: "40px", backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
        <CardProveedor
          proveedores={proveedores}
          deleteSupplier={deleteSupplier}
        />
      </div>
    </Layout>
  );
};

export default Proveedor;