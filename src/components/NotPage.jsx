import React from 'react'
import { Link } from 'react-router-dom';

const NotPage = () => {
  return (
    <>
    <div className='container mt-5 p-4 shadow-lg rounded'>
        <h1 className='text-center'>404 - Página no encontrada</h1>
        <div>
            <Link to ='/' className='btn btn-primary'>
            <h3>Volver al Home</h3>
            </Link>
        </div>

    </div>
    </>
  )
}

export default NotPage