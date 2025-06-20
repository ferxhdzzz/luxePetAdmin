import React from "react";
import "./CartItem.css";

const CartItem = ({
  product,
  name,
  description,
  image,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => onDecrease(product)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onIncrease(product)}>+</button>
      </div>
      <div className="item-price">${price}</div>
      <button className="remove-item" onClick={() => onRemove(product)}>
        <span className="trash-icon">🗑️</span>
      </button>
    </div>
  );
};

export default CartItem;
