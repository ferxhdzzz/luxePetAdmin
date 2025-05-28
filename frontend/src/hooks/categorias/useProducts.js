import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener todos los productos
    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            //const response = await fetch("http://localhost:4000/api/products"); 

            const response = await fetch("http://localhost:4000/api/products"); 

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            // Ordenar por fecha de creación más reciente y tomar solo los últimos 4
            const sortedProducts = data
                .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date))
                .slice(0, 4);

            setProducts(sortedProducts);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    // Función para obtener productos por categoría
    const fetchProductsByCategory = async (categoryId) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`/api/products/category/${categoryId}`);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching products by category:', err);
        } finally {
            setLoading(false);
        }
    };

    // Función para crear un nuevo producto
    const createProduct = async (productData) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();

            // Actualizar la lista de productos después de crear uno nuevo
            await fetchProducts();

            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // Función para eliminar un producto
    const deleteProduct = async (productId) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Actualizar la lista después de eliminar
            await fetchProducts();

            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // Función para actualizar un producto
    const updateProduct = async (productId, productData) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Actualizar la lista después de modificar
            await fetchProducts();

            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // Ejecutar fetchProducts al montar el componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,
        fetchProducts,
        fetchProductsByCategory,
        createProduct,
        deleteProduct,
        updateProduct
    };
};

export default useProducts;