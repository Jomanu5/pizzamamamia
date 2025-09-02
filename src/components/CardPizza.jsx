import React, { useContext } from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; 
import CartContext from '../context/CartContext';


const CardPizza = ({ pizza }) => {
  
  const precioFormato = pizza.price.toLocaleString('es-CL');
  
  const { cart, agregarCarrito } = useContext(CartContext);
  


  




  return (
    
    <div className='card-container d-flex flex-wrap justify-content-center gap-3'>
      <div className="card mt-4" style={{ width: '18rem' }}>
        <img
          src={`${pizza.img}&w=300&auto=format&fit=crop&q=80`}
          className="card-img-top img-thumbnail"
          alt={pizza.nombre}
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h4 className="card-title">{pizza.nombre}</h4>
          <h5 className='card-text'>Precio: ${precioFormato}</h5>
          <h6 className='fw-bold'>Ingredientes:</h6>
          <ul className='ps-3'>
            {pizza.ingredients.map((ingrediente, index) => ( 
              <li key={index}>
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-body d-flex justify-content-between p-4 mt-1">
          <button type="button" className="btn btn-primary px-4 fs-6">Más detalles</button>
          <button type="button" className="btn btn-success px-4 mx-2 fs-6" onClick={ () => agregarCarrito(pizza)}>Agregar al carrito</button>
        
        {/* funcion dentro de funcion /funcion controlada. */}
        </div>
      </div>
    </div>
  );
};

export default CardPizza;