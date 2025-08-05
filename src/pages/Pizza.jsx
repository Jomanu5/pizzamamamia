import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const pizza = () => {

  const { idpizza } = useParams(); // ← Captura el parámetro de la URL
  const [pizza, setPizza] = useState(null);

  
    useEffect(() => {
    const getPizza = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pizzas/${idpizza}`); // ← ruta dinámica        
        setPizza(response.data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
        setError(true);
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
          <button className="btn btn-success mt-3">
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default pizza