import { useState, useEffect } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener las reviews
    const fetchReviews = async () => {
        try {
            setLoading(true);
            setError(null);

            //const response = fetch("http://localhost:4000/api/category"

            const response = await fetch("https://luxepetadmin.onrender.com/api/reviews"); 

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            // Ordenar por fecha más reciente y tomar solo las últimas 3
            const sortedReviews = data
                .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date))
                .slice(0, 3);

            setReviews(sortedReviews);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching reviews:', err);
        } finally {
            setLoading(false);
        }
    };

    // Función para crear una nueva review
    const createReview = async (reviewData) => {
        try {
            const response = await fetch('https://luxepetadmin.onrender.com/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();

            // Actualizar la lista de reviews después de crear una nueva
            await fetchReviews();

            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // Función para eliminar una review
    const deleteReview = async (reviewId) => {
        try {
            const response = await fetch(`https://luxepetadmin.onrender.com/api/reviews/${reviewId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Actualizar la lista después de eliminar
            await fetchReviews();

            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // Función para actualizar una review
    const updateReview = async (reviewId, reviewData) => {
        try {
            const response = await fetch(`https://luxepetadmin.onrender.com/api/reviews/${reviewId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Actualizar la lista después de modificar
            await fetchReviews();

            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // Ejecutar fetchReviews al montar el componente
    useEffect(() => {
        fetchReviews();
    }, []);

    return {
        reviews,
        loading,
        error,
        fetchReviews,
        createReview,
        deleteReview,
        updateReview
    };
};

export default useReviews;