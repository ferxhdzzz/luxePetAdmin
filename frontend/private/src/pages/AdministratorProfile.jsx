import React, { useState, useEffect } from 'react';
import './configuration.css';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

// Componente ProductCategoryCard integrado directamente
const ProductCategoryCard = () => {
    const categories = [
        { id: 1, name: "Alimentos", count: 12 },
        { id: 2, name: "Accesorios", count: 8 },
        { id: 3, name: "Juguetes", count: 5 },
    ];

    // Componente para mostrar el icono según la categoría
    const CategoryIcon = ({ category }) => {
        return <div className="category-icon">🐾</div>; // Icono por defecto
    };

    // Componente para la flecha derecha
    const ChevronRight = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );

    return (
        <div className="category-cards-container">
            <h2 className="categories-title">Categorías de Productos</h2>
            <div className="category-cards">
                {categories.map((category) => (
                    <div key={category.id} className="category-card">
                        <div className="category-info">
                            <CategoryIcon category={category.name} />
                            <div className="category-details">
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-count">{category.count} productos</p>
                            </div>
                        </div>
                        <div className="category-arrow">
                            <ChevronRight />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Configuration = () => {
    const { user, updateUser, updatePassword } = useAuth();
    
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        numero: ''
    });

    const [passwordData, setPasswordData] = useState({
        contrasenaActual: '',
        nuevaContrasena: '',
        confirmarContrasena: ''
    });

    // Cargar datos del usuario autenticado
    useEffect(() => {
        if (user) {
            setUserData({
                nombre: user.nombre || '',
                apellido: user.apellido || '',
                email: user.email || '',
                numero: user.numero || ''
            });
        }
    }, [user]);

    const handleUserDataChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
            [name]: value
        });
    };

    const handleUserDataSubmit = (e) => {
        e.preventDefault();
        
        if (!userData.nombre || !userData.apellido || !userData.email || !userData.numero) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            toast.error("Por favor, ingresa un email válido.");
            return;
        }

        updateUser(userData);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        
        if (!passwordData.contrasenaActual || !passwordData.nuevaContrasena || !passwordData.confirmarContrasena) {
            toast.error("Por favor, completa todos los campos de contraseña.");
            return;
        }

        if (passwordData.nuevaContrasena !== passwordData.confirmarContrasena) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        if (passwordData.nuevaContrasena.length < 6) {
            toast.error("La nueva contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (updatePassword(passwordData.contrasenaActual, passwordData.nuevaContrasena)) {
            setPasswordData({
                contrasenaActual: '',
                nuevaContrasena: '',
                confirmarContrasena: ''
            });
        }
    };

    // Mostrar mensaje si no hay usuario autenticado
    if (!user) {
        return (
            <div className="config-container">
                <div className="config-wrapper">
                    <p>Por favor, inicia sesión para acceder a la configuración.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="config-container">
            <div className="config-wrapper">
                {/* Panel de información del usuario (izquierda) */}
                <div className="user-info-panel">
                    <div className="user-avatar-container">
                        <div className="user-avatar">
                            <svg className="avatar-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="user-info-header">
                            <div className="username">@{user.usuario}</div>
                            <div className="user-id">Usuario de LuxePet</div>
                        </div>
                    </div>

                    <div className="user-details">
                        <h3 className="section-title">Información</h3>

                        <div className="info-row">
                            <div className="info-label">Nombre:</div>
                            <div className="info-value">{user.nombre} {user.apellido}</div>
                        </div>

                        <div className="info-row">
                            <div className="info-label">Correo:</div>
                            <div className="info-value">{user.email}</div>
                        </div>

                        <div className="info-row">
                            <div className="info-label">Cel:</div>
                            <div className="info-value">{user.numero}</div>
                        </div>
                    </div>
                </div>

                {/* Panel de formulario (derecha) */}
                <div className="form-panel">
                    <h2 className="panel-title">Detalles</h2>

                    <form onSubmit={handleUserDataSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-input"
                                    placeholder="Nombre"
                                    value={userData.nombre}
                                    onChange={handleUserDataChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    className="form-input"
                                    placeholder="Apellido"
                                    value={userData.apellido}
                                    onChange={handleUserDataChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="usuario@ejemplo.com"
                                    value={userData.email}
                                    onChange={handleUserDataChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Número</label>
                                <input
                                    type="tel"
                                    name="numero"
                                    className="form-input"
                                    placeholder="XXX XXX XXXX"
                                    value={userData.numero}
                                    onChange={handleUserDataChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary">
                            Guardar Información
                        </button>
                    </form>

                    {/* Sección de cambio de contraseña */}
                    <form onSubmit={handlePasswordSubmit}>
                        <h3 className="password-title">Contraseña</h3>
                        <p className="password-subtitle">Cambiar la contraseña</p>

                        <div className="form-group">
                            <label className="form-label">Contraseña Actual</label>
                            <input
                                type="password"
                                name="contrasenaActual"
                                className="form-input"
                                placeholder="Contraseña actual"
                                value={passwordData.contrasenaActual}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    name="nuevaContrasena"
                                    className="form-input"
                                    placeholder="••••••••••••"
                                    value={passwordData.nuevaContrasena}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    name="confirmarContrasena"
                                    className="form-input"
                                    placeholder="Confirmar contraseña"
                                    value={passwordData.confirmarContrasena}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary">
                            Cambiar Contraseña
                        </button>
                    </form>

                    <div className="photo-upload-section">
                        <div className="photo-preview">
                            <svg className="avatar-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="photo-buttons">
                            <button type="button" className="btn-secondary">
                                Tomar foto
                            </button>
                            <button type="button" className="btn-secondary">
                                Subir imagen
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categorías de productos */}
            <div className="category-section">
                <ProductCategoryCard />
            </div>
        </div>
    );
};

export default Configuration;