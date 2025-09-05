import React, { useEffect, useState, useRef } from 'react';
import { getProducts } from '../api/products';
import ProductCard from './ProductCard';
import useDebounce from '../hooks/useDebounce';
import SearchBar from './SearchBar';
import Loader from './Loader';

function ProductList({ search }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visible, setVisible] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const debouncedSearch = useDebounce(search, 500);
  const loaderRef = useRef(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getProducts();
      console.log('data', data);
      setProducts(data);
      setFiltered(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products on search
  useEffect(() => {
    if (!debouncedSearch) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter((p) =>
          p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
      );
    }
    setVisible(6);
  }, [debouncedSearch, products]);

  // Infinite scroll using IntersectionObserver
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((prev) => {
            if (prev >= filtered.length) return prev; // stop when all loaded
            return prev + 6; // load next batch
          });
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filtered.length]); // re-run when product list changes

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="text-center text-red-500 flex flex-col items-center gap-4">
        <p>{error}</p>
        <button
          onClick={fetchProducts}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  const displayed = filtered.slice(0, visible);

  return (
    <div className="flex flex-col gap-6">
      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {displayed.length > 0 ? (
          displayed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>

      {/* Loader for infinite scroll */}
      {visible < filtered.length && (
        <div ref={loaderRef}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default ProductList;
