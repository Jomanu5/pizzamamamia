import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    
    
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/users/1');
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

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