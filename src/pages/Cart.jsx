import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  
  const { cart, setCart, total, setTotal, decrementQuantity, incrementQuantity } = useContext(CartContext);
  const token = localStorage.getItem('token');

      const sendCart = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ cart })
            })

            if (!response.ok) {
                console.log("error al enviar carrito")
            }

            if (response.ok) {
                alert("Compra realizada con éxito")
                
                setCart([])
                setTotal(0)
            }

        } catch (error) {
            console.log("error: ", error)
        }
    }



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
          <button className="btn btn-success px-4 mx-2 fs-6" onClick={sendCart}>
            Pagar

          </button>
        </h3>
      </div>
    </div>
    </>
  );
}

export default Cart;