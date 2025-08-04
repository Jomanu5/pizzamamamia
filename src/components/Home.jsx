import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../assets/json/pizzas.js';

const Home = () => {
  return (
    <> 
      <Header />
      
      {/* Contenedor principal con row */}
      <div className="container mt-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4"> {/* Cada card ocupará 4 columnas en pantallas medianas */}
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