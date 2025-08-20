import React, { use } from 'react';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const {pizzas} =useContext(ApiContext); // Importamos el contexto de ApiContext
 
  // const [pizzas, setPizzas] = useState([]);


  //  useEffect(() => {
  //   const getPizzas = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/pizzas"); 
  //       setPizzas(response.data);
  //     } catch (error) {
  //       console.error("Error al cargar las pizzas:", error);
        
  //     } 
  //   };

  //   getPizzas();
  // }, []);
  
 
 
  return (
    <> 
      <Header />
      
      {/* Contenedor principal con row */}
      <div className="container mt-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4"> 
              <CardPizza
                id={pizza.id}
                nombre={pizza.name}
                precio={pizza.price}
                img={pizza.img}
                ingredientes={pizza.ingredients}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;