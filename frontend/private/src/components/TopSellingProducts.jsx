import React from 'react';
import { FaDog, FaTshirt, FaGlassMartini, FaBox, FaGift, FaGamepad, FaPuzzlePiece } from 'react-icons/fa';
import useProducts from '../hooks/categorias/useProducts'; // Ajusta la ruta según tu estructura

const TopSellingProducts = () => {
    const { topStockProducts, loading, error } = useProducts();

    // Función para obtener el icono según la categoría del producto
    const getCategoryIcon = (categoryName, productName) => {
        if (!categoryName && !productName) return <FaBox />;

        const category = (categoryName || '').toLowerCase();
        const product = (productName || '').toLowerCase();

        // Iconos basados en categoría
        if (category.includes('premio') || category.includes('award')) return <FaGift />;
        if (category.includes('ropa') || category.includes('clothing')) return <FaTshirt />;
        if (category.includes('juguete') || category.includes('toy')) return <FaGamepad />;
        if (category.includes('accesorio') || category.includes('accessory')) return <FaPuzzlePiece />;

        // Iconos basados en nombre del producto
        if (product.includes('perro') || product.includes('dog')) return <FaDog />;
        if (product.includes('cama') || product.includes('bed')) return <FaTshirt />;
        if (product.includes('gato') || product.includes('cat') || product.includes('juguete')) return <FaGlassMartini />;

        return <FaBox />; // Icono por defecto
    };

    // Función para truncar nombres largos
    const truncateProductName = (name, maxLength = 20) => {
        if (!name) return 'Producto sin nombre';
        return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
    };

    // Función para formatear el stock
    const formatStock = (amount) => {
        if (!amount && amount !== 0) return '0 en stock';
        return `${amount} en stock`;
    };

    if (loading) {
        return (
            <div className="top-selling-container">
                <h3 className="top-selling-title">Productos con más stock</h3>
                <div className="loading-message">
                    <p>Cargando productos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="top-selling-container">
                <h3 className="top-selling-title">Productos con más stock</h3>
                <div className="error-message">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    if (topStockProducts.length === 0) {
        return (
            <div className="top-selling-container">
                <h3 className="top-selling-title">Productos con más stock</h3>
                <div className="no-products-message">
                    <p>No hay productos disponibles</p>
                </div>
            </div>
        );
    }

    return (
        <div className="top-selling-container">
            <h3 className="top-selling-title">Productos con más stock</h3>
            {topStockProducts.map((product, index) => (
                <div key={product._id || product.id} className="product-item">
                    <div className="product-icon">
                        {getCategoryIcon(
                            product.idCategory?.name || product.categoryName,
                            product.nameProduct
                        )}
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {truncateProductName(product.nameProduct)}
                        </div>
                        <div className="product-sales">
                            {formatStock(product.amount)}
                        </div>
                        {product.price && (
                            <div className="product-price">
                                ${parseFloat(product.price).toFixed(2)}
                            </div>
                        )}
                    </div>
                    <div className="product-rank">
                        #{index + 1}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopSellingProducts;