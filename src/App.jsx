// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Asegúrate de importar tu configuración de Firebase
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/NavBar'; // Importamos el Navbar
import './styles/global.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Si el usuario está logueado, lo guardamos en el estado
      } else {
        setUser(null); // Si no está logueado, dejamos el estado en null
      }
    });

    return () => unsubscribe(); // Limpiar el listener cuando el componente se desmonte
  }, []);

  return (
    <Router>
      <div>
        {/* Mostramos el Navbar en todas las páginas */}
        <Navbar user={user} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
