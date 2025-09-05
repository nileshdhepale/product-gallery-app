import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../api/products';
import Loader from '../components/Loader';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 mx-auto mb-6 object-contain"
      />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Category: {product.category}
      </p>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-6">${product.price}</p>

      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
      >
        ← Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
