import React from "react";
import "./Contactanos.css"; // Estilo CSS para la página de contacto
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Importando iconos de teléfono y correo

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Imagen de cabecera */}
      <div className="header-image">
        <img src="./contactanos.png" alt="Imagen de contacto" /> {/* Imagen que aparece en la parte superior */}
      </div>

      {/* Sección de contacto */}
      <div className="contact-section">
        {/* Información de contacto */}
        <div className="contact-info">
          <h2>Comienza a hablar con nosotros</h2> {/* Título de la sección */}
          {/* Descripción de contacto */}
          <p>Si tienes alguna queja o sugerencias, completa el formulario<p>y con gusto te leeremos, agradecemos cualquier <p>comentario de tu gusto </p></p> .</p>
          
          {/* Detalles de contacto, número telefónico */}
          <div className="contact-detail">
            <FaPhone className="icon" /> {/* Icono de teléfono */}
            <span>+503 7104 2228</span> {/* Número de contacto */}
          </div>
          
          {/* Detalles de contacto, correo electrónico */}
          <div className="contact-detail">
            <FaEnvelope className="icon" /> {/* Icono de correo */}
            <span>LuxePet@gmail.com</span> {/* Correo de contacto */}
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="contact-form">
          <form>
            {/* Fila para nombre y apellido */}
            <div className="form-row">
              <input type="text" placeholder="Nombre*" /> {/* Campo para el nombre */}
              <input type="text" placeholder="Apellido*" /> {/* Campo para el apellido */}
            </div>
            {/* Campos de correo y número telefónico */}
            <input type="email" placeholder="Correo*" /> {/* Campo para el correo */}
            <input type="text" placeholder="Número telefónico*" /> {/* Campo para el número telefónico */}
            {/* Campo de mensaje */}
            <textarea placeholder="Tu mensaje" rows="5"></textarea> {/* Área para escribir el mensaje */}
            <button type="submit">Enviar mensaje</button> {/* Botón para enviar el formulario */}
          </form>
        </div>
      </div>

      {/* Sección de testimonios */}
      <section className="testimonios">
        <div className="testimonios-texto">
          <h2>¿Te gustaria calificarnos?</h2> {/* Título para la sección de testimonios */}
          <p className="estrellas">★★★★★</p> {/* Representación de las estrellas para calificación */}
          <p className="comentario">
            Ingresa tu calificación para mejorar como aplicación {/* Mensaje que invita a calificar */}
          </p>
        </div>

        {/* Imagen de cliente feliz */}
        <div className="testimonios-imagen">
          <img src="https://i.pinimg.com/736x/8a/34/b9/8a34b9c8aabe95428db27fe83367f644.jpg" alt="Cliente feliz" /> {/* Imagen representando un cliente feliz */}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
