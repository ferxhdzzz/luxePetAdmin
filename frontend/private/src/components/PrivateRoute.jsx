import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    // si el usuario no está autenticado, redirige a la página de login
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;