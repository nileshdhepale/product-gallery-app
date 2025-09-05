import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-400
                 dark:bg-gray-800 dark:text-white dark:border-gray-600"
    />
  );
}

export default SearchBar;
