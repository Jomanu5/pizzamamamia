import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; 


const CardPizza = ({ id, desc, img, ingredientes, nombre, precio }) => {
  
  const precioFormato = precio.toLocaleString('es-CL'); 
  




  return (
    
    <div className='card-container d-flex flex-wrap justify-content-center gap-3'>
      <div className="card mt-4" style={{ width: '18rem' }}>
        <img
          src={`${img}&w=300&auto=format&fit=crop&q=80`}
          className="card-img-top img-thumbnail"
          alt={nombre}
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h4 className="card-title">{nombre}</h4>
          <h5 className='card-text'>Precio: ${precioFormato}</h5>
          <h6 className='fw-bold'>Ingredientes:</h6>
          <ul className='ps-3'>
            {ingredientes.map((ingrediente, index) => ( 
              <li key={index}>
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-body d-flex justify-content-between p-4 mt-1">
          <button type="button" className="btn btn-primary px-4 fs-6">Más detalles</button>
          <button type="button" className="btn btn-success px-4 mx-2 fs-6">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;