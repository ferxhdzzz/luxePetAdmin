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
            // Datos completos del usuario por defecto
            const userData = {
                usuario: usuario,
                nombre: "Admin",
                apellido: "Usuario",
                email: "admin@luxepet.com",
                numero: "503 7777 7777"
            };
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

    const updateUser = (updatedData) => {
        try {
            const newUserData = { ...user, ...updatedData };
            localStorage.setItem("user", JSON.stringify(newUserData));
            setUser(newUserData);
            toast.success("Información actualizada correctamente.");
            return true;
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            toast.error("Error al actualizar la información.");
            return false;
        }
    };

    const updatePassword = (currentPassword, newPassword) => {
        // En un sistema real, aquí verificarías la contraseña actual
        // Por ahora, simulamos que "123456" es la contraseña actual
        if (currentPassword !== "123456") {
            toast.error("La contraseña actual es incorrecta.");
            return false;
        }

        try {
            // En un sistema real, aquí enviarías la nueva contraseña al backend
            toast.success("Contraseña actualizada correctamente.");
            return true;
        } catch (error) {
            console.error("Error al actualizar contraseña:", error);
            toast.error("Error al actualizar la contraseña.");
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
            value={{
                user,
                Login,
                logOut,
                updateUser,
                updatePassword,
                isLoggedIn,
                setIsLoggedIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);