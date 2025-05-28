import React from "react";
import ProductCategoryCard from '../components/ProductCategoryCard';
import Sales from '../components/SalesChart';
import Top from '../components/TopSellingProducts';
import User from '../components/UserReviewCard';
import './card.css';

const Dash = () => {
    // Datos para las tarjetas de resumen (estos datos deberían venir de tu API o estado)
    const summaryCards = [
        { id: 1, number: '240', title: 'Total de proveedores', icon: '👥' },
        { id: 2, number: '40', title: 'Total de Empleados', icon: '👨‍💼' },
        { id: 3, number: '520', title: 'Total de ventas', icon: '📊' },
        { id: 4, number: '320', title: 'Productos', icon: '📦' }
    ];

    return (
        <div className="dashboard-container">
            {/* Tarjetas de resumen */}
            <div className="summary-cards-container">
                {summaryCards.map(card => (
                    <div key={card.id} className="summary-card">
                        <div className="summary-icon">{card.icon}</div>
                        <div className="summary-content">
                            <h2 className="summary-number">{card.number}</h2>
                            <p className="summary-title">{card.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Layout de dos columnas para el contenido principal */}
            <div className="dashboard-main-content">
                {/* Columna izquierda */}
                <div className="dashboard-column left-column">
                    {/* Top Selling Products */}
                    <Top />
                    
                    {/* Product Categories */}
                    <div className="category-section">
                        <ProductCategoryCard />
                    </div>
                </div>
                
                {/* Columna derecha */}
                <div className="dashboard-column right-column">
                    {/* Sales Chart */}
                    <Sales />
                    
                    {/* User Reviews */}
                    <User />
                </div>
            </div>
        </div>
    );
};

export default Dash;