import React, { useState } from "react";
import CartItem from "./components/CartItem.jsx";
import "./CartPagee.css";

const CartPage = ({ onContinueShopping, onCheckout }) => {
  // Estado para manejar la cantidad de cada producto
  const [quantities, setQuantities] = useState({
    vestido: 1,
    plato: 1,
    cama: 1,
  });

  // Datos de los productos
  const products = [
    {
      id: "vestido",
      name: "Vestido para gato",
      description:
        "Talla S, con revestido de algodón, perfecto para días fríos.",
      image:
        "https://m.media-amazon.com/images/I/71gisjNlf5L._AC_UF1000,1000_QL80_.jpg",
      price: 561,
    },
    {
      id: "plato",
      name: "Plato de comida para gato",
      description:
        "Plato simple para comida de gato, modelo grande color rosado.",
      image:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/133846820_01/w=1500,h=1500,fit=pad",
      price: 561,
    },
    {
      id: "cama",
      name: "Cama para perro",
      description: "Cama talla grande para perros, cómoda y espaciosa.",
      image:
        "https://sv.epaenlinea.com/media/catalog/product/cache/e28d833c75ef32af78ed2f15967ef6e0/7/3/73ee2d77-8e23-4d5d-8cd0-68bc477bcee9.jpg",
      price: 561,
    },
  ];

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (product) => {
    setQuantities({
      ...quantities,
      [product]: quantities[product] + 1,
    });
  };

  // Función para disminuir la cantidad de un producto, asegurándose que no baje de 1
  const decreaseQuantity = (product) => {
    if (quantities[product] > 1) {
      setQuantities({
        ...quantities,
        [product]: quantities[product] - 1,
      });
    }
  };

  // Función para eliminar un producto del carrito (por el momento solo hace un log en la consola)
  const removeItem = (product) => {
    console.log(`Eliminar ${product} del carrito`);
  };

  // Cálculo del subtotal, impuesto y total
  const itemPrice = 561; // Precio de cada artículo
  const subtotal =
    itemPrice * (quantities.vestido + quantities.plato + quantities.cama); // Subtotal basado en las cantidades
  const tax = Math.round(subtotal * 0.04 * 10) / 10; // Impuesto (4% del subtotal)
  const total = subtotal + tax; // Total con impuestos

  return (
    <div className="cart-page-container">
      <div className="cart-main-container">
        {/* Sección izquierda: Productos en el carrito */}
        <div className="cart-left-section">
          {/* Botón para volver a la tienda */}
          <button className="back-button" onClick={onContinueShopping}>
            <span className="back-arrow">←</span> Continua su compra
          </button>

          {/* Título de la sección del carrito */}
          <div className="cart-title-section">
            <h2>Carrito de compras</h2>
            <p>Tienes 3 productos en tu carrito.</p>
          </div>

          {/* Lista de productos en el carrito usando el componente CartItem */}
          <div className="cart-items">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                quantity={quantities[product.id]}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
        </div>

        {/* Sección derecha: Detalles de pago y resumen */}
        <div className="cart-right-section">
          <div className="payment-details">
            <h3>Detalles de pago</h3>

            {/* Método de pago */}
            <div className="payment-method">
              <p>Tipo de tarjeta de crédito</p>
              <div className="card-types">
                {/* Opciones de tarjetas */}
                <div className="card-option mastercard">
                  <img
                    src="https://brandemia.org/sites/default/files/sites/default/files/logo_mastercard-antes.jpg"
                    alt="Mastercard"
                  />
                </div>
                <div className="card-option visa">
                  <img
                    src="https://www.marketingdirecto.com/wp-content/uploads/2014/08/visa2.jpg"
                    alt="Visa"
                  />
                </div>
                <div className="card-option rupay">
                  <img
                    src="https://cdn.substack.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/d1a88ad1-802f-4d03-af42-c94b6380857c_1800x900.jpeg"
                    alt="RuPay"
                  />
                </div>
                <button className="see-all-btn">Ver todos</button>
              </div>
            </div>

            {/* Detalles de la tarjeta */}
            <div className="card-details">
              <div className="input-group">
                <label>Nombre de tarjeta</label>
                <input type="text" placeholder="Nombre" />
              </div>

              <div className="input-group">
                <label>Número de tarjeta</label>
                <input type="text" placeholder="1111 2222 3333 4444" />
              </div>

              <div className="card-security">
                <div className="input-group expiry">
                  <label>Fecha de expiración</label>
                  <input type="text" placeholder="mm/yy" />
                </div>

                <div className="input-group cvv">
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>

            {/* Resumen de precios */}
            <div className="price-summary">
              <div className="price-row">
                <span>Subtotal</span>
                <span className="price">${subtotal.toFixed(1)}</span>
              </div>
              <div className="price-row">
                <span>Impuesto</span>
                <span className="price">${tax.toFixed(1)}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span className="price">${total.toFixed(1)}</span>
              </div>
            </div>

            {/* Botón para confirmar la compra */}
            <button className="confirm-button" onClick={onCheckout}>
              <span className="price">${total.toFixed(1)}</span>
              <span className="confirm-text">Confirmar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
