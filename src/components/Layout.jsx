import React from 'react'
import{Link, Outlet} from 'react-router-dom';

const Layout = () => {
  const total = 25000;
  const token = false;
  const precioFormato = total.toLocaleString('es-CL');
  
  
    return (
    
    
    <> 

    
<nav className="navbar navbar-expand-lg text-light bg-dark"> 
  <div className="d-flex justify-content-between align-items-center container-fluid">
    <Link to ='/' className="navbar-brand text-light shadow-lg" href="#">Pizzería Mamma Mia</Link>
               
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link to ='/'className="nav-link active text-light" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to ='404' className="nav-link text-light" href="#">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to='/cart' className="nav-link text-light" href="#">Cart</Link>
        </li>
        <div>
          { token ? (
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Logout</a>
            </li>
          ) : (
            <div  className="d-flex gap-2">
            <li className="nav-item">
              <Link to ='/login' className="nav-link text-light" href="#">Login</Link>
            </li>
           <li className="nav-item">
              <Link to ='/register' className="nav-link text-light" href="#">Register</Link>
          </li>
          </div>
          )}
        </div>
      </ul>
      <Link to ='/cart' className="btn btn-secondary ms-auto" type="button">
        <button type="button" className="btn btn-secondary ms-auto">Total: $ {precioFormato}</button>
      </Link>  

    </div>
  </div>
</nav>
    <Outlet />
</>

  )
}

export default Layout