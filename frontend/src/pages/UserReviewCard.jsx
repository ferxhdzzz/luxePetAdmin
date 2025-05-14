import React from 'react';
import { Star } from 'lucide-react';

const UserReviewCard = ({ 
  username = "Karina", 
  timeAgo = "2 days ago", 
  comment = "Excelentes productos!", 
  rating = 4.5,
  userImage = "/api/placeholder/80/80" 
}) => {
  // Función para renderizar las estrellas basadas en la calificación
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={20} fill="#FFCC00" color="#FFCC00" />
        ))}
        
        {hasHalfStar && (
          <div className="relative">
            <Star size={20} fill="none" color="#FFCC00" />
            <div className="absolute top-0 left-0 overflow-hidden w-1/2">
              <Star size={20} fill="#FFCC00" color="#FFCC00" />
            </div>
          </div>
        )}
        
        {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`empty-${i}`} size={20} fill="none" color="#FFCC00" />
        ))}
        
        <span className="ml-2 text-lg font-medium text-gray-700">{rating}</span>
      </div>
    );
  };

  return (
    <div className="max-w-xs bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center mb-2">
        <div className="relative">
          <img 
            src={userImage} 
            alt={username}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-gray-800">{username}</h3>
          <p className="text-sm text-gray-500">{timeAgo}</p>
        </div>
      </div>
      
      <div className="mb-2">
        <p className="text-gray-700">{comment}</p>
      </div>
      
      <div className="mt-2">
        {renderStars(rating)}
      </div>
    </div>
  );
};

// Componente para mostrar múltiples reseñas
const UserReviews = () => {
  const reviews = [
    {
      username: "Karina",
      timeAgo: "2 days ago",
      comment: "Excelentes productos!",
      rating: 4.5,
      userImage: "/api/placeholder/80/80"
    },
    // Puedes agregar más reseñas aquí
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {reviews.map((review, index) => (
        <UserReviewCard
          key={index}
          username={review.username}
          timeAgo={review.timeAgo}
          comment={review.comment}
          rating={review.rating}
          userImage={review.userImage}
        />
      ))}
    </div>
  );
};

export default UserReviews;