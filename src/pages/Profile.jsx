
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
    
    
//     const [user, setUser] = useState(null);

//     const getUser = async () => {
//         try {
//             const response = await axios.get('https://api.escuelajs.co/api/v1/users/1');
//             setUser(response.data);
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     useEffect(() => {
//         getUser();
//     }, []);
import React, { useEffect, useState } from 'react'

const Profile = () => {
 const [user, setUser] = useState(null)
 
 
 useEffect(() => {
   const fetchUser = async () =>{
    const token = localStorage.getItem('token')
    if(!token) {
      console.log('No token found');
      return;
    }

    try {
      const response = await fetch ('http://localhost:5000/api/auth/me',{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      )

      if (!response.ok) {
        console.log('Failed to fetch user data');
        return;
      }
  
      const data = await response.json()
      setUser(data)
      
    } catch (error) {
      console.log('Error:', error);      
    }

  

   }
 
   fetchUser()
  
 }, [])
 




    return (
        <>
            {user && (
                <div className='container mt-5 p-4 shadow-lg rounded'>
                    <h1 className='text-center'>Perfil de Usuario</h1>
                    <div className='d-flex flex-column align-items-center'>
                        <img 
                            src={user.avatar} 
                            alt={user.name} 
                            className='img-thumbnail' 
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                        />
                        <h2 className='mt-3'>{user.name}</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;