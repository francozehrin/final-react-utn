
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => doc.data());
      setProducts(productsData);
    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Bienvenido a nuestro restaurante</h1>
      <div className="product-list">
        {products.slice(0, 4).map((product, index) => (
          <div key={index} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>SKU: {product.sku}</p>
            <Link to={`/product/${product.sku}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
