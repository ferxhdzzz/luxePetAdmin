import React from "react";
import ProductCategoryCard from '../components/ProductCategoryCard';
import Sales from '../components/SalesChart';
import Top from '../components/TopSellingProducts';
import User from '../components/UserReviewCard';
import InformationCard from '../components/CardInformation'; // Corrección aquí
import './card.css';

const Dash = () => {
    return (
        <div className="dashboard-container">
            <InformationCard /> 

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
