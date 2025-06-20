import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import useProducts from '../hooks/categorias/useProducts'; // Ajusta la ruta según tu estructura de carpetas

const InformationCard = () => {
    const { products, topStockProducts, loading, error } = useProducts();
    const [summaryData, setSummaryData] = useState({
        totalStock: 0,
        totalProducts: 0,
        totalSuppliers: 240, // Mantienes estos valores estáticos por ahora
        totalEmployees: 40,
        totalSales: 520
    });

    // Función para calcular el stock total de todos los productos
    const calculateTotalStock = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/products");
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const allProducts = await response.json();

            // Calcular el stock total sumando todos los amounts
            const totalStock = allProducts.reduce((sum, product) => {
                return sum + (product.amount || 0);
            }, 0);

            // Actualizar el estado con los datos calculados
            setSummaryData(prev => ({
                ...prev,
                totalStock: totalStock,
                totalProducts: allProducts.length
            }));
        } catch (err) {
            console.error('Error calculating total stock:', err);
        }
    };

    // Ejecutar el cálculo cuando el componente se monte
    useEffect(() => {
        calculateTotalStock();
    }, []);

    // Datos para las tarjetas de resumen con información dinámica
    const summaryCards = [
        {
            id: 1,
            number: summaryData.totalSuppliers.toString(),
            title: 'Total de proveedores',
            icon: '👥'
        },
        {
            id: 2,
            number: summaryData.totalEmployees.toString(),
            title: 'Total de Empleados',
            icon: '👨‍💼'
        },
        {
            id: 3,
            number: summaryData.totalSales.toString(),
            title: 'Total de ventas',
            icon: '📊'
        },
        {
            id: 4,
            number: summaryData.totalProducts.toString(),
            title: 'Productos',
            icon: '📦'
        },
        {
            id: 5,
            number: summaryData.totalStock.toString(),
            title: 'Stock Total',
            icon: '📋'
        }
    ];

    // Mostrar loading si está cargando
    if (loading) {
        return (
            <div className="summary-cards-container">
                <div className="loading-message">Cargando información...</div>
            </div>
        );
    }

    // Mostrar error si hay algún problema
    if (error) {
        return (
            <div className="summary-cards-container">
                <div className="error-message">Error: {error}</div>
            </div>
        );
    }

    // Tarjetas de resumen
    return (
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

            {/* Sección adicional para mostrar productos con más stock 
            {topStockProducts.length > 0 && (
                <div className="top-stock-section">
                    <h3>Productos con Mayor Stock</h3>
                    <div className="top-stock-grid">
                        {topStockProducts.map(product => (
                            <div key={product.id || product._id} className="top-stock-card">
                                <div className="product-info">
                                    <h4>{product.name || product.title}</h4>
                                    <p className="stock-amount">Stock: {product.amount || 0}</p>
                                    <p className="product-price">
                                        Precio: ${product.price || 0}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default InformationCard;