import React from 'react';
// Importa el componente Link de React Router para navegación interna
import { Link } from 'react-router-dom';
// Importa íconos de redes sociales desde react-icons/fa6
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub } from 'react-icons/fa6';
// Importa los estilos CSS para el Footer
import './Footer.css';

// Componente funcional Footer
function Footer() {
  return (
    // Contenedor principal del pie de página
    <footer className="footer">
      
      <div className="footer-top">
        
        {/* Logo y redes sociales */}
        <div className="footer-logo">
          {/* Imagen del logo de la empresa */}
          <img src="/luxe.svg" alt="Tu Logo" />
          
          {/* Contenedor de íconos de redes sociales */}
          <div className="footer-socials">
            {/* Enlace a Facebook con su ícono */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            {/* Enlace a Instagram con su ícono */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            {/* Enlace a Twitter con su ícono */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            {/* Enlace a GitHub con su ícono */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Secciones informativas del footer */}
        <div className="footer-sections">

          {/* Sección de enlaces sobre la empresa */}
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/historia">¿Quiénes somos?</Link></li>
              <li><Link to="/products">Tienda</Link></li>
            </ul>
          </div>

          {/* Sección de atención al cliente */}
          <div className="footer-section">
            <h4>Atención al cliente</h4>
            <ul>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/Terminos">Términos y condiciones</Link></li>
            </ul>
          </div>

          {/* Sección del usuario */}
          <div className="footer-section">
            <h4>Mi cuenta</h4>
            <ul>
              <li><Link to="/login">Iniciar sesión</Link></li>
              <li><Link to="/configuration">Mi configuración</Link></li>
              <li><Link to="/cart">Mi carrito</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parte inferior del footer con línea divisoria y derechos reservados */}
      <div className="footer-bottom">
        <hr /> {/* Línea horizontal separadora */}
        <p>© 2025 LuxePet. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default Footer;
