import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex flex-col h-full border rounded-lg p-4 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition">
        <LazyLoad height={200} offset={100}>
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-3"
          />
        </LazyLoad>

        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <p className="font-bold mt-auto">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
