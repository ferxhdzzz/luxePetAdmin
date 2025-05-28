import React, { useState } from 'react';
import './configuration.css';

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
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        numero: '',
        contrasena: '',
        confirmarContrasena: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', userData);
        // Aquí se manejaría la lógica de envío a backend
    };

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
                            <div className="username">@nombreusuario</div>
                            <div className="user-id">Identificación del usuario</div>
                        </div>
                    </div>

                    <div className="user-details">
                        <h3 className="section-title">Información</h3>

                        <div className="info-row">
                            <div className="info-label">Nombre:</div>
                            <div className="info-value">Nombre Usuario</div>
                        </div>

                        <div className="info-row">
                            <div className="info-label">Correo:</div>
                            <div className="info-value">usuario@ejemplo.com</div>
                        </div>

                        <div className="info-row">
                            <div className="info-label">Cel:</div>
                            <div className="info-value">XXX XXX XXXX</div>
                        </div>
                    </div>
                </div>

                {/* Panel de formulario (derecha) */}
                <div className="form-panel">
                    <h2 className="panel-title">Detalles</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-input"
                                    placeholder="Nombre"
                                    value={userData.nombre}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary">
                            Guardar
                        </button>

                        <h3 className="password-title">Contraseña</h3>
                        <p className="password-subtitle">Cambiar la contraseña</p>

                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="contrasena"
                                    className="form-input"
                                    placeholder="••••••••••••"
                                    value={userData.contrasena}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirmarContrasena"
                                    className="form-input"
                                    placeholder="Confirmar contraseña"
                                    value={userData.confirmarContrasena}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="button" className="btn-primary">
                            Guardar
                        </button>

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
                    </form>
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