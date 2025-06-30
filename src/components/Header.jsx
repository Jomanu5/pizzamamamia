import React from 'react';

import img1 from '../assets/img/pizza1.jpg';
import img2 from '../assets/img/pizza2.jpg';
import img3 from '../assets/img/pizza3.webp';

const Header = () => {
  
  
  return (
   <>
  <div className="w-100 p-3 height: 100px width: 120px">

<div id="carouselExampleFade" className="carousel slide carousel-fade ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block  w-100 img-fluid" alt="..."/>
       <div class="carousel-caption d-none d-md-block bg-secondary p-2 text-light bg-opacity-50">
        <h2>Pizzas Mamma Mía</h2>
        <h3>Las Mejores pizzas de la ciudad</h3>.
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block  w-100 img-fluid" alt="..."/>
        <div class="carousel-caption d-none d-md-block bg-secondary p-2 text-light bg-opacity-50">
          <h2>Pizzas Mamma Mía</h2>
          <h3>Las Mejores pizzas de la ciudad</h3>.
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block  w-100 img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block bg-secondary p-2 text-light bg-opacity-50">
          <h2>Pizzas Mamma Mía</h2>
          <h3>Las Mejores pizzas de la ciudad</h3>.
      </div>  
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
   </>
  );
};

export default Header;
