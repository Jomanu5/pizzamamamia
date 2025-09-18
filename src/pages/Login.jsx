import React, { useContext } from 'react'
import { useState } from 'react';
import Home from './Home';
import { Navigate, useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated } = useContext(TokenContext); 

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        console.log('Login failed');
      } else {alert('Login exitoso')}

      const data = await response.json();
      localStorage.setItem('token', data.token); 
      setEmail('');
      setPassword('');
      navigate('/');

      
    
    } catch (error) {
      console.log('Error:', error);
      alert('Error en el login');
    }

  };
  
  
  
  
      return (
        <>
        
        <form onSubmit= {handleSubmit} className="container mt-5 p-4 shadow-lg rounded">
        
        <h2>Inicia Sesión</h2>
        <h4>¡y obten ofertas de las mejores  de pizzas!</h4>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">E-mail</label>
            <input 
              type="text"  
              className="form-control" 
              id="exampleFormControlInput1" 
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
  
          </div>
          
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Password</label>
            <input 
              type="password" 
              id="inputPassword1" 
              class="form-control" 
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          
          
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
  
        </form>
  
      </>
    )
  }

export default Login