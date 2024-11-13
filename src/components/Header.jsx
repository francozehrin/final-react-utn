
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}>Cerrar sesión</button>
    </div>
  );
}

export default Header;
