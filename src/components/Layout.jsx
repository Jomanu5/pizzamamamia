import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { TokenContext } from '../context/TokenContext'; 
import LogoutButton from './LogoutButton';
const Layout = () => {
  
  const { token } = useContext(TokenContext); 
  const { total } = useContext(CartContext);
  
  const setActiveLink = ({isActive}) => isActive 
    ? 'nav-link active text-light active fw-bold' 
    : 'nav-link text-light';

  return (
    <> 
      <nav className="navbar navbar-expand-lg text-light bg-dark"> 
        <div className="d-flex justify-content-between align-items-center container-fluid">
          <Link to='/' className="navbar-brand text-light shadow-lg" href="#">
            Pizzería Mamma Mia
          </Link>
                   
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <button className="nav-item text-light btn btn-dark">
                <NavLink to='/' className={setActiveLink}>
                  Home
                </NavLink>
              </button>
              
            
              <button className="nav-item text-light btn btn-dark">
                 <NavLink to='/profile' className={setActiveLink}>
                  Profile
                </NavLink>
              </button>
              
              
              <div>
                {token ? (
                  <div className="d-flex gap-2">
                    <li className="nav-item text-light btn btn-dark">
                    <LogoutButton />
                    </li>
                  </div>
                ) : (
                  <div className="d-flex gap-2">
                    <button className="nav-item text-light btn btn-dark">
                      <NavLink to='/login' className={setActiveLink}>
                        Login
                      </NavLink>
                    </button>
                    <button className="nav-item text-light btn btn-dark">
                      <NavLink to='/register' className={setActiveLink}>
                        Register
                      </NavLink>
                    </button>
                  </div>
                )}
              </div>
            </ul>
            
            <Link to='/cart' className="btn btn-secondary ms-auto">
              <button type="button" className="btn btn-secondary">
                Carrito: Total: $ {total.toLocaleString('es-CL')}
              </button>
            </Link>  
          </div>
        </div>
      </nav>
      
      <Outlet />
    </>
  )
}

export default Layout