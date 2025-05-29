import React from 'react';
import { FaStar } from 'react-icons/fa';
import useReviews from '../hooks/categorias/useReview'; // Ajusta la ruta según tu estructura de carpetas

const UserReviewCard = () => {
    const { reviews, loading, error } = useReviews();

    // Función para renderizar estrellas según la calificación
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} />);
        }

        if (hasHalfStar) {
            stars.push(<FaStar key="half" style={{ opacity: 0.5 }} />);
        }

        return stars;
    };

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        if (!dateString) return 'Fecha no disponible';

        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 día atrás';
        if (diffDays < 7) return `${diffDays} días atrás`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} semanas atrás`;
        return `${Math.ceil(diffDays / 30)} meses atrás`;
    };

    // Función para obtener las iniciales del nombre del cliente
    const getInitials = (customerName) => {
        if (!customerName) return '?';
        const names = customerName.split(' ');
        return names.length > 1
            ? names[0].charAt(0) + names[1].charAt(0)
            : names[0].charAt(0);
    };

    if (loading) {
        return (
            <div className="user-reviews-container">
                <h3 className="reviews-title">Reseñas de los clientes</h3>
                <div className="loading-message">
                    <p>Cargando reseñas...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="user-reviews-container">
                <h3 className="reviews-title">Reseñas de los clientes</h3>
                <div className="error-message">
                    <p>Error al cargar las reseñas: {error}</p>
                </div>
            </div>
        );
    }

    if (reviews.length === 0) {
        return (
            <div className="user-reviews-container">
                <h3 className="reviews-title">Reseñas de los clientes</h3>
                <div className="no-reviews-message">
                    <p>No hay reseñas disponibles</p>
                </div>
            </div>
        );
    }

    return (
        <div className="user-reviews-container">
            {/* Título de la sección de reseñas */}
            <h3 className="reviews-title">Reseñas de los clientes</h3>
            <div className="reviews-grid">
                {reviews.map(review => (
                    <div key={review._id || review.id} className="review-card">
                        <div className="reviewer">
                            <div className="reviewer-avatar">
                                {/* Si hay un avatar disponible, muestra la imagen, 
                                de lo contrario, muestra las iniciales del cliente */}
                                {review.avatar ? (
                                    <img src={review.avatar} alt={review.customerName || 'Cliente'} />
                                ) : (
                                    getInitials(review.customerName || review.idCustomer?.name || 'Cliente')
                                )}
                            </div>
                            <div className="reviewer-info">
                                <div className="reviewer-name">
                                    {/* Si el Nombre del cliente no esta disponible se mostrara 'Cliente Anónimo' */}
                                    {review.customerName || review.idCustomer?.name || 'Cliente Anónimo'}
                                </div>
                                <div className="review-date">
                                    {formatDate(review.createdAt || review.date)}
                                </div>
                            </div>
                        </div>
                        <div className="review-text">
                            {/* Comentario de la reseña o 'Sin comentario' si no se proporciona */}
                            {review.comment || 'Sin comentario'}
                        </div>
                        <div className="review-rating">
                            <div className="stars">
                                {/* Renderización de estrellas según la calificación */}
                                {renderStars(review.rating || 0)}
                            </div>
                            <div className="rating-number">
                                {/* Mostrar la calificación numérica */}
                                {review.rating || 0}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default UserReviewCard;