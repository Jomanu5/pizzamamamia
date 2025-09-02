import React, { useEffect } from 'react'
import { createContext } from 'react';
import { useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([]);
    
    
    
  const decrementQuantity = (pizza) => {
    setCart(prevCart => 
      prevCart.map(pizza => 
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 } 
          : pizza
      ).filter(pizza => pizza.count > 0)
    );
  };

  const incrementQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(pizza => 
        pizza.id === id 
          ? { ...pizza, count: pizza.count + 1 } 
          : pizza
      )
    );
  };

    const total = cart.reduce((suma, pizza) => {
    return suma + (pizza.price * pizza.count);
  }, 0);

   const agregarCarrito = (pizza) =>{
    
    
    const existePizza = cart.find(item => item.id === pizza.id);
    if (existePizza) {
      // Si la pizza ya está en el carrito, incrementa su cantidad
      
      setCart(cart.map(item => 
        item.id === pizza.id 
          ? { ...item, count: item.count + 1 } 
          : item
      ));
      return; // Salir de la función para evitar agregar una nueva entrada
    } else{
      
      setCart([...cart, {...pizza, count: 1}]);
    }

   }



  return (
    
    <CartContext.Provider value={{ cart, total, decrementQuantity, incrementQuantity, agregarCarrito }}>
        {children}
    </CartContext.Provider>
    
  )
}


export default CartContext