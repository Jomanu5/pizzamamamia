import React from 'react';

const CardPizza = ({name, price, ingredients,img}) => {
  const precioFormato = price.toLocaleString('es-CL');
  return (
    <>
      <div className="card mt-4 " style={{ width: '18rem' }}>
        <img src= {img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className='card-text'>Precio: ${precioFormato}</h5>
          <p className="card-text">{ingredients}</p>
        </div> 
        
        <div className="card-body d-flex justify-content-between p-4 mt-1">
          
          <button type="button" className="btn btn-primary px-4 fs-6">Más detalles</button>
          <button type="button" className="btn btn-success px-4 mx-2 fs-6">Agregar al carrito</button>

        </div>
      </div>


    </>
  );
};

export default CardPizza;