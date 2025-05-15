import React from 'react';
import { FaStar } from 'react-icons/fa';

const UserReviewCard = () => {
    // Datos de ejemplo para las reseñas de usuarios
    const reviews = [
        { 
            id: 1, 
            name: 'Karina', 
            date: '2 días ago', 
            text: 'Excelentes productos!', 
            rating: 4.5,
            avatar: '/avatar1.jpg' // Reemplazar con rutas reales a imágenes
        },
        { 
            id: 2, 
            name: 'Chaewon', 
            date: '3 días ago', 
            text: 'Entregas muy rápidas', 
            rating: 4.5,
            avatar: '/avatar2.jpg'
        },
        { 
            id: 3, 
            name: 'Giselle', 
            date: '3 días ago', 
            text: 'Excelente servicio!', 
            rating: 4.5,
            avatar: '/avatar3.jpg'
        },
        { 
            id: 4, 
            name: 'Ryujin', 
            date: '2 días ago', 
            text: 'Entregas en buen estado', 
            rating: 4.5,
            avatar: '/avatar4.jpg'
        }
    ];

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

    return (
        <div className="user-reviews-container">
            <h3 className="reviews-title">Reseñas de los clientes</h3>
            <div className="reviews-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="reviewer">
                            <div className="reviewer-avatar">
                                {/* Si hay avatar disponible, usa la imagen, sino usa iniciales */}
                                {review.avatar ? (
                                    <img src={review.avatar} alt={review.name} />
                                ) : (
                                    review.name.charAt(0)
                                )}
                            </div>
                            <div className="reviewer-info">
                                <div className="reviewer-name">{review.name}</div>
                                <div className="review-date">{review.date}</div>
                            </div>
                        </div>
                        <div className="review-text">{review.text}</div>
                        <div className="review-rating">
                            <div className="stars">
                                {renderStars(review.rating)}
                            </div>
                            <div className="rating-number">{review.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserReviewCard