import React, { useState } from 'react';
import useReviews from '../hooks/useReviews.jsx';
import './Testimonios.css';

function Testimonios() {
    const { reviews, loading, error } = useReviews();
    const [currentTestimonioIndex, setCurrentTestimonioIndex] = useState(0);

    // Función para navegar al siguiente testimonio
    const nextTestimonio = () => {
        setCurrentTestimonioIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Función para navegar al testimonio anterior
    const prevTestimonio = () => {
        setCurrentTestimonioIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    // Función para generar estrellas basadas en el rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating || 5);
        const hasHalfStar = (rating || 5) % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating || 5);

        return (
            <>
                {'★'.repeat(fullStars)}
                {hasHalfStar && '☆'}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };

    // Testimonio actual
    const currentTestimonio = reviews[currentTestimonioIndex];

    // Estados de carga y error
    if (loading) {
        return (
            <section className="testimonios">
                <div className="testimonios-loading">
                    <p>Cargando testimonios...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="testimonios">
                <div className="testimonios-error">
                    <h5>Testimonios</h5>
                    <h2>¿Qué opinan nuestros clientes acerca de nosotros?</h2>
                    <p>Error al cargar testimonios. Intenta más tarde.</p>
                </div>
            </section>
        );
    }

    if (reviews.length === 0) {
        return (
            <section className="testimonios">
                <div className="testimonios-empty">
                    <h5>Testimonios</h5>
                    <h2>¿Qué opinan nuestros clientes acerca de nosotros?</h2>
                    <p>Aún no hay testimonios disponibles.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="testimonios">
            {/* texto con reseña y calificación del cliente actual */}
            <div className="testimonios-texto">
                <h5>Testimonios</h5>
                <h2>¿Qué opinan nuestros clientes acerca de nosotros?</h2>

                <p className="estrellas">
                    {renderStars(currentTestimonio.rating)}
                </p>

                <p className="comentario">
                    {currentTestimonio.comment || currentTestimonio.review || 'Comentario no disponible'}
                </p>

                <h4>{currentTestimonio.userName || currentTestimonio.name || 'Cliente Anónimo'}</h4>

                {/* Indicadores de navegación */}
                {reviews.length > 1 && (
                    <div className="testimonios-indicadores">
                        {reviews.map((_, index) => (
                            <span
                                key={index}
                                className={`indicador ${index === currentTestimonioIndex ? 'active' : ''}`}
                                onClick={() => setCurrentTestimonioIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* imagen del cliente con botones para navegar entre testimonios */}
            <div className="testimonios-imagen">
                <img
                    src={currentTestimonio.userImage || currentTestimonio.image || "/img4.png"}
                    alt={`${currentTestimonio.userName || 'Cliente'} - Testimonio`}
                    onError={(e) => {
                        e.target.src = "/img4.png"; // Imagen de fallback
                    }}
                />
                {reviews.length > 1 && (
                    <div className="botones">
                        <button
                            className="boton-izquierda"
                            onClick={prevTestimonio}
                        >
                            ‹
                        </button>
                        <button
                            className="boton-derecha"
                            onClick={nextTestimonio}
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Testimonios;