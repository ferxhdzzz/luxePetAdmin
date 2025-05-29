import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
import { toast } from "react-hot-toast";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const Login = (usuario, password) => {
        if (!usuario || !password) {
            toast.error("Por favor, completa todos los campos.");
            return false;
        } else if (usuario === "admin" && password === "123456") {
            // Cambié el email por usuario para que coincida con tu nuevo diseño
            const userData = { usuario };
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
            setIsLoggedIn(true);

            toast.success("Inicio de sesión exitoso.");
            return true;
        } else {
            toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
            setIsLoggedIn(false);
            return false;
        }
    };

    const logOut = () => {
        try {
            localStorage.removeItem("user");
            setUser(null);
            setIsLoggedIn(false);
            toast.success("Sesión cerrada.");
            return true;
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            toast.error("Error al cerrar sesión.");
            return false;
        }
    };

    // verifica si hay un usuario guardado en el localStorage al cargar la aplicación
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setUser(userData);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, Login, logOut, isLoggedIn, setIsLoggedIn }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);