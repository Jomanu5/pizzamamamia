import React from 'react'
import { useState } from 'react';
import { pizzaCart } from '../assets/json/pizzas.js'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  
  // const [cart, setCart] = useState(pizzaCart);
  const {cart, setCart} = useContext(CartContext);
  

  const incrementQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(pizza => 
        pizza.id === id 
          ? { ...pizza, count: pizza.count + 1 } 
          : pizza
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(pizza => 
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 } 
          : pizza
      ).filter(pizza => pizza.count > 0)
    );
  };

  const total = cart.reduce((suma, pizza) => {
    return suma + (pizza.price * pizza.count);
  }, 0);




  return (
    <>

      <div className='container mt-5 p-4 shadow-lg rounded'>

      <h2 className='mt-6'>Detalles del Pedido:</h2>
      {cart.map((pizza) => (
        <div className='d-flex p-2 align-items-center  border m-3 p-3 gap w-50' key={pizza.id}>
          <img 
            src={pizza.img} 
            alt={pizza.name} 
            className="img-thumbnail" 
            style={{height: '100px', objectFit:'cover'}}
          />
          <div className="mx-3">
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
          </div>
          
          <button 
            className='btn btn-outline-danger' 
            onClick={() => decrementQuantity(pizza.id)}
          >
            -
          </button>
          <p className="mx-2">Cantidad: {pizza.count}</p>
          <button 
            className='btn btn-outline-success' 
            onClick={() => incrementQuantity(pizza.id)}
            >
            +
          </button>


        </div>
        
      ))}
      
       <div className="mt-4 p-3 bg-light border-top">
        <h3 className="text-end">
          Total: ${total.toLocaleString('es-CL')}
        </h3>
      </div>
    </div>
    </>
  );
}

export default Cart;