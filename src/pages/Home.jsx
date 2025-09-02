import React, {useContext } from 'react';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ApiContext from '../context/ApiContext.jsx';

const Home = () => {

  const {pizzas} = useContext (ApiContext); // Importamos el contexto de ApiContext
 
 
  return !pizzas ? (
  <div className="text-center mt-5">Cargando pizza...</div>
  ) :  
  
  (
    <> 

      <Header />
      
      {/* Contenedor principal con row */}
      <div className="container mt-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4"> 
              <CardPizza
               pizza={pizza}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;