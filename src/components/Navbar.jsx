import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;
  const precioFormato = total.toLocaleString('es-CL');


return (
<> 
<nav className="navbar navbar-expand-lg text-light bg-dark"> 
  <div className="d-flex justify-content-between align-items-center container-fluid">
    <a className="navbar-brand text-light shadow-lg" href="#">Pizzería Mamma Mia</a>
               
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Profile</a>
        </li>
        <div>
          { token ? (
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Logout</a>
            </li>
          ) : (
            <div  className="d-flex gap-2">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Login</a>
            </li>
           <li className="nav-item">
              <a className="nav-link text-light" href="#">Register</a>
          </li>
          </div>
          )}
        </div>
      </ul>
        
      <button type="button" className="btn btn-secondary ms-auto">Total: $ {precioFormato}</button>

    </div>
  </div>
</nav>
</>

)
};

export default Navbar