import React from 'react'
import { useState } from 'react';
const Login = () => {
    
    const [user, setUser] = useState("");
    const [password1, setPassword1] = useState("");
    
  
    const [error, setError] = useState(false)
      
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Usuario:", user,
                  "Contraseña 1:", password1,
        
      )
  
      if (!user.trim() || !password1.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los campos son obligatorios!',
        })
        setError(true);
        return; 
      }
      else {
        setError(false);
        
        if (user === "admin"||"admin@admin.com" && password1 === "12345678") {
          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: 'Has iniciado sesión correctamente.',
          })
          setUser("");
          setPassword1("");
        }
        else {
          setError(true);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos! intenta con: Usuario: "admin" o "admin@admin.com, password: 12345678',
          })
          setUser("");
          setPassword1("");
          return;
        }
      }
      }
      
      
      return (
        <>
        
        <form onSubmit= {handleSubmit} className="container mt-5 p-4 shadow-lg rounded">
        {error? <p>Usuario y/o clave incorrecta, intenta con Usuario: "admin" o "admin@admin.com, password: 12345678</p>: null}
        
        <h2>Inicia Sesión</h2>
        <h4>¡y obten ofertas de las mejores  de pizzas!</h4>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre de usuario</label>
            <input 
              type="text"  
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              />
  
          </div>
          
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Contraseña nueva</label>
            <input 
              type="password" 
              id="inputPassword1" 
              class="form-control" 
              aria-describedby="passwordHelpBlock"
              value={password1}
              onChange={(e)=> setPassword1(e.target.value)}/>
          </div>
          
          
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
  
        </form>
  
      </>
    )
  }

export default Login