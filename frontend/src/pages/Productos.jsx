import React from 'react';
import CardProducto from '../components/CardProductos';

import './Productos.css';

const productos = [
  {
    id: 1,
    name: 'Comida para perro',
    price: 12.0,
    discount: 16,
    imagen: 'https://i.pinimg.com/736x/6f/75/60/6f75603bf373c3f041a06a64206ea4b4.jpg'
  },
  {
    id: 2,
    name: 'Plato para gato',
    price: 12.0,
    imagen: 'https://i.pinimg.com/736x/3a/e2/4b/3ae24b1cc6e0f643b69e4cc927aa3a94.jpg'
  },
  {
    id: 3,
    name: 'Correa para perro',
    price: 12.0,
    discount: 10,
    imagen: 'https://i.pinimg.com/736x/04/cc/69/04cc694e6c2b4323345dc693abe482cc.jpg'
  },
  {
    id: 4,
    name: 'Comida para conejo',
    price: 12.0,
    imagen: 'https://i.pinimg.com/736x/0b/85/59/0b8559d9b5ce6440eb447af9b46c7bb2.jpg'
  },
  {
    id: 5,
    name: 'Plato para perro',
    price: 12.0,
    discount: 10,
    imagen: 'https://i.pinimg.com/736x/fd/ec/ec/fdececbc621850dab5565aa8de0ff4d3.jpg'
  },
  {
    id: 6,
    name: 'Comida para cachorro',
    price: 12.0,
    discount: 5,
    imagen: 'https://i.pinimg.com/736x/d6/87/be/d687befb2117d31c803a1f7e3ad98dcd.jpg'
  },
  {
    id: 7,
    name: 'Cama para conejo',
    price: 12.0,
    discount: 10,
    imagen: 'https://i.pinimg.com/736x/89/2a/38/892a3815f159cbdd026082533e5df62d.jpg'
  },
  {
    id: 8,
    name: 'Comida para conejo',
    price: 12.0,
    discount: 10,
    imagen: 'https://i.pinimg.com/736x/89/2a/38/892a3815f159cbdd026082533e5df62d.jpg'
  }
];

const AdminProducts = () => {
  const handleEditar = (producto) => {
    console.log('Editar producto:', producto);
    // Aquí puedes conectar con tu backend usando Axios o fetch
  };

  const handleEliminar = (producto) => {
    console.log('Eliminar producto:', producto);
    // Aquí puedes hacer una petición DELETE a tu backend
  };

  return (
    <div className="admin-container">
      {productos.map((producto) => (
        <CardProducto
          key={producto.id}
          producto={producto}
          onEditar={handleEditar}
          onEliminar={handleEliminar}
        />
      ))}
    </div>
  );
};

export default AdminProducts;
