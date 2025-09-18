import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false)

  const navigate = useNavigate();
    
  const handleSubmit = async (e) => {
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
      }
    } 
    
    // FETCH REGISTER
    try {
     const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({ nombre, email, password: password1 })
      })

      if (!response.ok) {
        console.log('Registro fallido');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El registro ha fallado!',
        })
        return; 
      } else {
        Swal.fire(
          '¡Registro exitoso!',
          'Ya puedes iniciar sesión',
          'success'
        )
      }
      
      const data = await response.json();
      console.log(data);

      localStorage.setItem('token', data.token);
      
      
      navigate('/');
      
    } catch (error) {
      console.log('Error:', error);
    }
    
    
    setNombre("");
    setEmail("");
    setPassword1("");
    setPassword2("");
  } 
  
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5 p-4 shadow-lg rounded">
        {error? <p>Todos los datos son necesarios</p>: null}
        
        <h2>Regístrate</h2>
        <h4>¡y obten ofertas de las mejores pizzas!</h4>
        <div className="mb-3">
          
          <label htmlFor="exampleFormControlInput1" className="form-label">Nombre de usuario</label>
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
          
          <label htmlFor="exampleFormControlInput2" className="form-label">Correo electrónico </label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput2" 
            placeholder="correo@ejemplo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          
          <label htmlFor="inputPassword1" className="form-label">Contraseña nueva</label>
          <input 
            type="password" 
            id="inputPassword1" 
            className="form-control" 
            aria-describedby="passwordHelpBlock"
            value={password1}
            onChange={(e)=> setPassword1(e.target.value)}/>
        </div>
        <div className="mb-3">
          
          <label htmlFor="inputPassword2" className="form-label">Repetir contraseña nueva</label>
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