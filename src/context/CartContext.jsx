import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import pizza from '../pages/Pizza';
import { pizzaCart } from '../assets/json/pizzas.js'


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([]);

    
    
    
  return (
    
    <CartContext.Provider value={{cart, setCart, pizzaCart}}>
        {children}
    </CartContext.Provider>
    
  )
}


export default CartContext