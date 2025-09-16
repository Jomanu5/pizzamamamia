import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import axios from 'axios';
import CartContext from '../context/CartContext';

const pizza = () => {

    const { cart, agregarCarrito } = useContext(CartContext);
  
  const { idpizza } = useParams(); // ← Captura el parámetro de la URL
  const [pizza, setPizza] = useState(null);

  
   useEffect(() => {
    const getPizza = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/pizzas/${idpizza}`);
      setPizza(data);
    } catch (error) {
      console.log(error);
    }
  };
  getPizza();
}, [idpizza]);
  

  return !pizza ? (
  <div className="text-center mt-5">Cargando pizza...</div>
  ) : 

  (

    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title text-capitalize">{pizza.name}</h2>
          <h4 className="text-success mb-3">
            {pizza.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
          </h4>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <p className="mt-3">{pizza.desc}</p>

            <div className="card-body d-flex justify-content-between p-4 mt-1">
              <button type="button" className="btn btn-primary px-4 fs-6">
                <Link to={`/`} className="text-decoration-none text-white">
                  Volver al Home
                </Link>
              </button>
              <button type="button" className="btn btn-success px-4 mx-2 fs-6" onClick={() => agregarCarrito(pizza)}>Agregar al carrito</button>

            </div>

        </div>
      </div>
    </div>
  )
}

export default pizza