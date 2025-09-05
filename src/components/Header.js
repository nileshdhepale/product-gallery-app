import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Header({ search, setSearch }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <h1 className="text-2xl font-bold">Product Gallery</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <SearchBar search={search} setSearch={setSearch} />

        {/* Theme Toggle Icon Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === 'light' ? (
            <MoonIcon className="h-6 w-6 text-gray-800" />
          ) : (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
