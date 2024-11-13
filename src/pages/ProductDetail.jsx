

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function ProductDetail() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const q = query(collection(db, 'products'), where('sku', '==', id));

        
        const querySnapshot = await getDocs(q);

        
        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data();
          setProduct(productData);
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);  
  
  if (loading) {
    return <p>Cargando...</p>;
  }

  
  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>SKU: {product.sku}</p>
    </div>
  );
}

export default ProductDetail;
