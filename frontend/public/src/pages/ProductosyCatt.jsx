import React from 'react';
import Prodcutos from './Products';
import Categorias from './Categorias';

const Porductosycategoria = () => {
  return (
    <>

/* enlaces que unen dos paginas para que aparezca en una sola pantalla */
      <Categorias />
      <Prodcutos />
    </>
  );
};

export default Porductosycategoria;