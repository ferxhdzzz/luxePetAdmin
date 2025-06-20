import React from 'react';
import './BtnProductos.css';

const Boton = ({ texto, tipo = 'primario', onClick }) => {
  return (
    <button className={`boton ${tipo}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;