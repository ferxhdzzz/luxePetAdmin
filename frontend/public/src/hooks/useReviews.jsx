import { useState, useEffect } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [allReviews, setAllReviews] = useState([]); // Para mantener todas las reviews
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener las reviews
    const fetchReviews = async (limit = 4) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("https://luxepetadmin.onrender.com/api/reviews");

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Validar que data sea un array
            if (!Array.isArray(data)) {
                throw new Error('Los datos recibidos no son válidos');
            }

            // Guardar todas las reviews
            setAllReviews(data);

            // Filtrar reviews válidas (que tengan comentario y rating)
            const validReviews = data.filter(review =>
                review &&
                (review.comment || review.review) &&
                review.rating &&
                review.rating > 0
            );

            // Ordenar por fecha más reciente y tomar solo las especificadas por limit
            const sortedReviews = validReviews
                .sort((a, b) => {
                    const dateA = new Date(a.createdAt || a.date || Date.now());
                    const dateB = new Date(b.createdAt || b.date || Date.now());
                    return dateB - dateA;
                })
                .slice(0, limit);

            setReviews(sortedReviews);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching reviews:', err);

            // En caso de error, usar datos de ejemplo para mostrar algo
            setReviews([]);
        } finally {
            setLoading(false);
        }
    };

    // Función para crear una nueva review
    const createReview = async (reviewData) => {
        try {
            setLoading(true);
            const response = await fetch('https://luxepetadmin.onrender.com/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...reviewData,
                    createdAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();

            // Actualizar la lista de reviews después de crear una nueva
            await fetchReviews();

            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Función para eliminar una review
    const deleteReview = async (reviewId) => {
        try {
            setLoading(true);
            const response = await fetch(`https://luxepetadmin.onrender.com/api/reviews/${reviewId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            // Actualizar la lista después de eliminar
            await fetchReviews();

            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Función para actualizar una review
    const updateReview = async (reviewId, reviewData) => {
        try {
            setLoading(true);
            const response = await fetch(`https://luxepetadmin.onrender.com/api/reviews/${reviewId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...reviewData,
                    updatedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            // Actualizar la lista después de modificar
            await fetchReviews();

            return await response.json();
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Función para cambiar el límite de reviews mostradas
    const setLimit = (newLimit) => {
        fetchReviews(newLimit);
    };

    // Ejecutar fetchReviews al montar el componente
    useEffect(() => {
        fetchReviews();
    }, []);

    return {
        reviews,
        allReviews,
        loading,
        error,
        fetchReviews,
        createReview,
        deleteReview,
        updateReview,
        setLimit
    };
};

export default useReviews;