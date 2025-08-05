import { useState } from 'react';
import React from 'react'

const Register = () => {
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState(false)
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre,
      "Email", email,
      "Contraseña 1:", password1,
      "Contraseña 2:", password2
    )

    if (!nombre.trim() || !email.trim() || !password1.trim() || !password2.trim()) {
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
      
      if (password1.length < 6) {
        Swal.fire({
          icon: 'error',
          title: '¡Contraseña débil!',
          text: 'La contraseña debe tener al menos 6 caracteres.',
        });
        setPassword1("");
        setPassword2("");
        return; 
      }
      if (password1 !== password2) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden!',
        })
        setPassword1("");
        setPassword2("");
        return;
      }}
    }
    
    
    return (
      <>
      
      <form onSubmit= {handleSubmit} className="container mt-5 p-4 shadow-lg rounded">
      {error? <p>Todos los datos son necesarios</p>: null}
      
      <h2>Regístrate</h2>
      <h4>¡y obten ofertas de las mejores pizzas!</h4>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Nombre de usuario</label>
          <input 
            type="text"  
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Usuario"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />

        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Correo electrónico </label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" p
            placeholder="correo@ejemplo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
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
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Repetir contraseña nueva</label>
          <input 
            type="password" 
            id="inputPassword2" 
            className="form-control" 
            aria-describedby="passwordHelpBlock"
            value={password2}
            onChange={(e)=> setPassword2(e.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Registrarse</button>

      </form>

    </>
  )
}

export default Register