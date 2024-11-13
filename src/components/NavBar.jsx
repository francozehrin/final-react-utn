

import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ user }) {
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
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        
        {/* Si el usuario está autenticado, muestra "Cerrar sesión", de lo contrario "Iniciar sesión" y "Registrarse" */}
        {user ? (
          <>
            <li>
              <button onClick={handleSignOut}>Cerrar sesión</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
